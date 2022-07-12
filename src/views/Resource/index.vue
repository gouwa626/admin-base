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
    <n-space>
      <n-button type="primary" @click="handleSearch">查询</n-button>
      <n-button type="primary" @click="handleAdd">新建资源</n-button>
    </n-space>
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
import { resourceDelete, resourceList } from '@/api/resource';
import Dialog from './components/Dialog.vue';
import dayjs from 'dayjs';
import { ResourceRow } from '@/typings/resource';
import { findLabel } from '@/utils';
import { AppTypeList, VerifyList } from '@/mock/enums';
import { useEnumsDataStore } from '@/store';
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
const rowKey = (rowData: ResourceRow) => rowData.ID as string;
const columnsFuc = ({
  handleEdit,
  handleDel,
}: {
  handleEdit: (row: ResourceRow) => void;
  handleDel: (row: ResourceRow) => void;
}): DataTableColumns<ResourceRow> => {
  return [
    // {
    //   title: 'ID',
    //   key: 'ID',
    // },
    {
      title: '资源名称',
      key: 'ResourceName',
    },
    {
      title: '所属项目',
      key: 'ProjectId',
      render(row) {
        return h(
          'span',
          {},
          findLabel(
            enums.projectAllData,
            row.ProjectId as string,
            'ID',
            'ProjectName'
          )
        );
      },
    },
    {
      title: '访问路径',
      key: 'ResourcePath',
    },
    {
      title: '权重级别',
      key: 'SortWeight',
    },
    {
      title: '验签类型',
      key: 'ResourcePath',
    },
    {
      title: '超时时间',
      key: 'Timeout',
    },
    {
      title: '重试次数',
      key: 'RetryTime',
    },
    {
      title: '时间戳有效期',
      key: 'TimestampFlag',
    },
    {
      title: '备注',
      key: 'ResourceMemo',
    },
    {
      title: '修改时间',
      key: 'ModifyTime',
      width: 100,
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
      width: 140,
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
  resourceList(pagination)
    .then((res) => {
      data.value = res.data;
      pagination.itemCount = res.count;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
}
getList();
function getData(page: number) {
  pagination.page = page;
  getList();
}
function handleEdit(row: ResourceRow) {
  selectId.value = row.ID as string;
  nextTick(() => {
    dialogRef.value.showModal();
  });
}
function handleDel(row: ResourceRow) {
  console.log(row.ID);
  const d = window.$dialog?.warning({
    title: '警告',
    content: `你确定要删除(${row.ResourceName})吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      console.log('确定');
      d.loading = true;
      return new Promise((resolve) => {
        resourceDelete(row)
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
function handleSearch() {
  pagination.page = 1;
  getList();
}
// 新建｜编辑处理
const selectId = ref('');
const dialogRef = ref();
const enums = useEnumsDataStore();
function handleAdd() {
  selectId.value = '';
  nextTick(() => {
    dialogRef.value.showModal();
  });
}
function updateAdd() {
  getList();
  // 更新全部资源list
  enums.setResourceAllData();
}
</script>
