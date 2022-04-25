<template>
  <basic-modal @register="addmodelRegister" @on-sub="handleClickSubmit" :title="modelTitle">
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="80px">
        <n-form-item label="姓名" path="name">
          <n-input v-model:value="formModel.name" placeholder="请输入姓名" />
        </n-form-item>
        <n-form-item label="年龄" path="age">
          <n-input v-model:value="formModel.age" placeholder="请输入年龄" />
        </n-form-item>
        <n-form-item label="地址" path="address">
          <n-input v-model:value="formModel.address" placeholder="请输入地址" />
        </n-form-item>
        <n-form-item label="标签" path="tags">
          <n-select
            multiple
            v-model:value="formModel.tags"
            placeholder="请选择标签"
            :options="generalOptions"
          />
        </n-form-item>
      </n-form>
    </div>
  </basic-modal>
</template>

<script setup lang="ts">
import { useModal } from '@/components/Modal';
import basicModal from '@/components/Modal/src/basicModal.vue';
import { ref } from 'vue';
import type { tableRow } from '../index.vue';
interface Props {
  selectRow: tableRow;
}
const props = defineProps<Props>();
const emit = defineEmits(['submit', 'register']);
let modelTitle = ref('新建');
let [addmodelRegister, { openModal, closeModal: close }] = useModal({
  closable: true,
  width: 600,
});
function showModal() {
  formModel.value = props.selectRow;
  modelTitle.value = props.selectRow.id ? '编辑' : '新建';

  openModal();
}
function closeModal() {
  close();
}
function handleClickSubmit() {
  emit('submit', formModel.value);
  close();
}
defineExpose({ showModal });

let formModel = ref<Recordable>({});
const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map((v) => ({
  label: v,
  value: v,
}));
</script>

<style scoped lang="scss">
.form-warper {
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  // height: 800px;
}
</style>
