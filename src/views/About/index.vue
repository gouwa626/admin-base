<template>
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
  </n-space>
</template>

<script setup lang="ts">
import { iconifyRender } from '@/utils';
import { h, reactive, ref } from '@vue/runtime-core';
import { DataTableColumns, NButton, NTag, PaginationProps } from 'naive-ui';

// 表格模块
interface tableRow {
  name: string;
  id: string;
  age: number;
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
      title: 'Name',
      key: 'name',
    },
    {
      title: "Co('lum')n3",
      key: 'address',
    },
    {
      title: 'tags',
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
  console.log(row);
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
        age: 32 + i,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      });
    }
    setTimeout(() => {
      resolve({
        data: temp,
        total: 99,
      });
    }, 500);
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
</script>

<style scoped lang="scss"></style>
