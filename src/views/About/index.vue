<template>
  <n-space vertical :size="12">
    <n-data-table
      remote
      size="small"
      :row-key="rowKey"
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="paginationReactive"
      :single-line="false"
      @update-page="handleChangePage"
    />
  </n-space>
</template>

<script setup lang="ts">
import { iconifyRender } from '@/utils';
import { h, reactive, ref } from '@vue/runtime-core';
import { NButton, NTag, PaginationInfo, PaginationProps } from 'naive-ui';
import { onMounted } from 'vue';
interface tableRow {
  name: string;
  id: string;
  age: number;
  address: string;
  tags: string[];
}
const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Age',
    key: 'age',
  },
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    render: (row: tableRow) => {
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
    render(row: tableRow) {
      const btns = [
        h(
          NButton,
          {
            type: 'primary',
            style: 'margin-right:10px',
          },
          {
            default: () => '编辑',
            icon: iconifyRender('mdi:abjad-hebrew'),
          }
        ),
        h(
          NButton,
          {
            type: 'primary',
            onClick: () => handleEdit(row),
          },
          {
            default: () => '编辑',
            icon: iconifyRender('mdi-ab-testing'),
          }
        ),
      ];
      return btns;
    },
  },
];
function handleEdit(row: tableRow) {
  console.log(row);
}
const data = ref<tableRow[]>([]);
const loading = ref(false);
const paginationReactive = ref({
  page: 1,
  pageSize: 10,
});
function setData(page: number) {
  return new Promise((resolve) => {
    let temp = [];
    for (let i = 1; i < 11; i++) {
      temp.push({
        id: `page${page}-${i}`,
        name: 'John Brown',
        age: 32 + i,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      });
    }
    const resData = temp;
    setTimeout(() => {
      resolve({
        data: resData,
        total: 99,
      });
    }, 500);
  });
}
const rowKey = (rowData) => rowData.id;
function handleChangePage(page: number) {
  getData(page);
}
function getData(page: number) {
  paginationReactive.value.page = page;
  if (!loading.value) {
    loading.value = true;
    setData(page).then((res: any) => {
      data.value = res.data;
      loading.value = false;
      paginationReactive.value.itemCount = res.total;
    });
  }
}
getData(1);
</script>

<style scoped lang="scss"></style>
