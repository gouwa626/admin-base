<template>
  <!-- <n-space>
    <n-form
      ref="formRef"
      label-placement="left"
      inline
      :label-width="80"
      :model="formValue"
    >
      <n-form-item label="姓名" path="user.name">
        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="年龄" path="user.age">
        <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
      </n-form-item>
      <n-form-item label="电话号码" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="电话号码" />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick">
          查询
        </n-button>
      </n-form-item>
    </n-form>
  </n-space>
  <n-divider /> -->
  <n-space vertical :size="12">
    <n-button type="primary" @click="handleAdd">新建渠道</n-button>
    <n-data-table
      remote
      size="small"
      :row-key="rowKey"
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="pagination"
      :single-line="false"
      @update-page="getData"
      striped
    />
  </n-space>
  <Dialog ref="dialogRef" :selectId="selectId" @submit="updateAdd"></Dialog>
</template>

<script lang="ts" setup>
import { ref, h, reactive, nextTick } from 'vue';
import { FormInst, DataTableColumns, NButton, PaginationInfo } from 'naive-ui';
import { channelDelete, channelList } from '@/api/channel';
import Dialog from './components/Dialog.vue';
import dayjs from 'dayjs';
import { ChannelRow } from '@/typings/channel';
import { findLabel } from '@/utils';
import { AppTypeList, VerifyList } from '@/mock/enums';
const formRef = ref<FormInst | null>(null);
const formValue = ref({
  user: {
    name: '',
    age: '',
  },
  phone: '',
});
function handleValidateClick() {
  pagination.page = 1;
  getList();
}
// 表格相关
const rowKey = (rowData: ChannelRow) => rowData.ID as string;
const columnsFuc = ({
  handleEdit,
  handleDel,
}: {
  handleEdit: (row: ChannelRow) => void;
  handleDel: (row: ChannelRow) => void;
}): DataTableColumns<ChannelRow> => {
  return [
    // {
    //   title: 'ID',
    //   key: 'ID',
    // },
    {
      title: '渠道名称',
      key: 'AppName',
    },
    {
      title: 'AppKey',
      key: 'AppKey',
    },
    {
      title: '密钥',
      key: 'AppSecret',
    },
    {
      title: '渠道类型',
      key: 'AppType',
      render(row) {
        return h('span', {}, findLabel(AppTypeList, row.AppType));
      },
    },
    {
      title: '安全策略',
      key: 'VerifyType',
      render(row) {
        return h('span', {}, findLabel(VerifyList, row.VerifyType));
      },
    },
    {
      title: '备注',
      key: 'AppMemo',
    },
    {
      title: '修改时间',
      key: 'ModifyTime',
      render(row) {
        return h(
          'span',
          {},
          dayjs(row.ModifyTime).format('YYYY-MM-DD HH:mm:ss')
        );
      },
    },
    {
      title: '操作',
      key: 'handle',
      render(row) {
        return [
          h(
            NButton,
            {
              type: 'primary',
              onClick: () => handleEdit(row),
            },
            {
              default: () => '编辑',
            }
          ),
          h(
            NButton,
            {
              type: 'primary',
              ghost: true,
              onClick: () => handleDel(row),
            },
            {
              default: () => '删除',
            }
          ),
        ];
      },
    },
  ];
};
const columns = columnsFuc({ handleEdit, handleDel });
const data = ref([]);
const loading = ref(true);
const pagination = reactive<PaginationInfo>({
  page: 1,
  pageSize: 10,
  itemCount: 1,
  pageCount: 1,
  startIndex: 1,
  endIndex: 1,
});
function getList() {
  loading.value = true;
  channelList(pagination).then((res) => {
    console.log(res);
    data.value = res.data;
    pagination.itemCount = res.count;
    loading.value = false;
  });
}
getList();
function getData(page: number) {
  pagination.page = page;
  getList();
}
function handleEdit(row: ChannelRow) {
  selectId.value = row.ID as string;
  nextTick(() => {
    dialogRef.value.showModal();
  });
}
function handleDel(row: ChannelRow) {
  const d = window.$dialog?.warning({
    title: '警告',
    content: `你确定要删除(${row.AppName})吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      console.log('确定');
      d.loading = true;
      return new Promise((resolve) => {
        channelDelete(row)
          .then(() => {
            window.$message.success('删除成功');
            getList();
          })
          .then(resolve);
      });
    },
    onNegativeClick: () => {
      console.log('取消');
    },
  });
}

// 新建｜编辑处理
const selectId = ref('');
const dialogRef = ref();
function handleAdd() {
  selectId.value = '';
  nextTick(() => {
    dialogRef.value.showModal();
  });
}
function updateAdd() {
  getList();
  console.log();
}
</script>
