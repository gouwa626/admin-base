<template>
  <n-data-table
    remote
    ref="table"
    :columns="columns"
    :data="dataRef"
    :loading="loadingRef"
    :pagination="paginationReactive"
    :row-key="rowKey"
    @update:page="handlePageChange"
  />
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive, onMounted } from 'vue';

const columns = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'name',
    key: 'name',
  },
  {
    title: 'age',
    key: 'age',
  },
];

function query(page, pageSize = 10) {
  return new Promise((resolve) => {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push({
        id: `page${page}-${i}`,
        name: 'John Brown',
        age: 32 + i,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      });
    }
    const pagedData = temp;
    const total = 1000;
    const pageCount = Math.ceil(total / pageSize);
    setTimeout(
      () =>
        resolve({
          pageCount,
          data: pagedData,
          total,
        }),
      500
    );
  });
}
const loading = ref(false);
const dataRef = ref([]);
const loadingRef = ref(true);
const paginationReactive = reactive({
  page: 1,
  pageCount: 1,
  pageSize: 10,
  prefix({ itemCount }) {
    return `Total is ${itemCount}.`;
  },
});

onMounted(() => {
  query(paginationReactive.page, paginationReactive.pageSize).then((data) => {
    dataRef.value = data.data;
    paginationReactive.pageCount = data.pageCount;
    paginationReactive.itemCount = data.total;
    loadingRef.value = false;
  });
});

const rowKey = (rowData) => {
  return rowData.column1;
};
function handlePageChange(currentPage) {
  if (!loadingRef.value) {
    loadingRef.value = true;
    paginationReactive.page = currentPage;
    query(currentPage, paginationReactive.pageSize).then((data) => {
      dataRef.value = data.data;
      paginationReactive.pageCount = data.pageCount;
      paginationReactive.itemCount = data.total;
      loadingRef.value = false;
    });
  }
}
</script>
