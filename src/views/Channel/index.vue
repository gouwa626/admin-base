<template>
  <n-space>
    <n-form ref="formRef" label-placement="left" inline :label-width="80" :model="formValue">
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
        <n-button attr-type="button" @click="handleValidateClick"> 查询 </n-button>
      </n-form-item>
    </n-form>
  </n-space>
  <n-divider />
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
    />
  </n-space>
  <Dialog ref="dialogRef" :selectId="selectId" @submit="updateAdd"></Dialog>
</template>

<script lang="ts" setup>
import { ref, h, reactive } from 'vue';
import { FormInst, DataTableColumns, NButton, PaginationInfo } from 'naive-ui';
import { channelList } from '@/api/channel';
import Dialog from './components/Dialog.vue';
import dayjs from 'dayjs';
import { useModal } from '@/components/Modal';
export interface ChannelRow {
  ID: string;
  AppKey: string;
  AppName: string;
  AppMemo: string;
  AppSecret: string;
  AppType: number;
  AppStatus: number;
  VerifyType: number;
  CreateTime: string;
  ModifyTime: string;
}
const formRef = ref<FormInst | null>(null);
const formValue = ref({
  user: {
    name: '',
    age: '',
  },
  phone: '',
});
function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      window.$message.success('Valid');
    } else {
      console.log(errors);
      window.$message.error('Invalid');
    }
  });
}
// 表格相关
const rowKey = (rowData: ChannelRow) => rowData.ID;
const columnsFuc = ({
  handleEdit,
  handleDel,
}: {
  handleEdit: (row: ChannelRow) => void;
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
      title: '修改时间',
      key: 'ModifyTime',
      render(row) {
        return h('span', {}, dayjs(row.ModifyTime).format('YYYY-MM-DD HH:mm:ss'));
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
    data.value = res.data.data;
    pagination.itemCount = res.data.count;
    loading.value = false;
  });
}
getList();
function getData(page: number) {
  pagination.page = page;
  getList();
}
function handleEdit(row: ChannelRow) {
  selectId.value = row.ID;
  dialogRef.value.showModal();
}
function handleDel(row: ChannelRow) {
  console.log(row.ID);
  const dialog = useModal({ closable: true, width: 600 });
  console.log(dialog);
}

// 新建｜编辑处理
const selectId = ref('');
const dialogRef = ref();
function handleAdd() {
  selectId.value = '';
  dialogRef.value.showModal();
}
function updateAdd() {
  console.log();
}
</script>
