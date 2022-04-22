<template>
  <n-space>
    <n-button @click="handleClickAdd">新建</n-button>
  </n-space>
  <n-space vertical :size="12">
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
    <Add ref="addRef" :selectRow="selectRow" @submit="updateAdd"></Add>
  </n-space>
</template>

<script setup lang="ts">
import { h, reactive, ref, toRaw, toRef, toRefs, unref } from '@vue/runtime-core';
import { cloneDeep } from 'lodash';
import { DataTableColumns, NButton, NTag } from 'naive-ui';
import Add from './components/Add.vue';
// 表格模块
export interface tableRow {
  name: string;
  id: string;
  age: string;
  address: string;
  tags: string[];
}
const rowKey = (rowData: tableRow) => rowData.id;
const columnsFuc = ({
  handleEdit,
}: {
  handleEdit: (row: tableRow) => void;
}): DataTableColumns<tableRow> => {
  return [
    {
      title: 'ID',
      key: 'id',
    },
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '年龄',
      key: 'age',
    },
    {
      title: '地址',
      key: 'address',
    },
    {
      title: '标签',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((item) => {
          return h(
            NTag,
            {},
            {
              default: () => item,
            }
          );
        });
        return tags;
      },
    },
    {
      title: '操作',
      key: 'handle',
      render(row) {
        return h(
          NButton,
          { onClick: () => handleEdit(row) },
          {
            default: () => '编辑',
          }
        );
      },
    },
  ];
};
const columns = columnsFuc({ handleEdit });
function handleEdit(row: tableRow) {
  // 一定要这样赋值
  selectRow = Object.assign(selectRow, row);
  (addRef.value as any).showModal();
}
const data = ref<tableRow[]>([]);
const loading = ref(false);
const pagination = reactive({
  page: 1,
  pageSize: 10,
  itemCount: 1,
});
function setData(page: number) {
  return new Promise((resolve) => {
    let temp: tableRow[] = [];
    for (let i = 1; i < 11; i++) {
      temp.push({
        id: `page${page}-${i}`,
        name: 'John Brown',
        age: `${32 + i}`,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      });
    }
    setTimeout(() => {
      resolve({
        data: temp,
        total: 99,
      });
    }, 200);
  });
}
function getData(page: number) {
  pagination.page = page;
  if (!loading.value) {
    loading.value = true;
    setData(page).then((res: any) => {
      data.value = res.data;
      pagination.itemCount = res.total;
      loading.value = false;
    });
  }
}
getData(1);
// 编辑处理
const addRef = ref(null);
let selectRow = reactive({});
function updateAdd(updateRow: tableRow) {
  data.value.forEach((item) => {
    if (item.id == updateRow.id) {
      Object.assign(item, updateRow);
    }
  });
}
//新建
function handleClickAdd() {
  selectRow = Object.assign(
    selectRow,
    cloneDeep({
      name: '',
      id: '',
      age: '',
      address: '',
      tags: [],
    })
  );
  (addRef.value as any).showModal();
}
</script>

<style scoped lang="scss"></style>
