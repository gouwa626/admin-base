<template>
  <basic-modal @register="addmodelRegister" @on-sub="handleClickSubmit">
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="80px">
        <n-form-item label="姓名" path="name">
          <n-input v-model:value="formModel.name" placeholder="Input" />
        </n-form-item>
        <n-form-item label="Select" path="address">
          <n-select
            v-model:value="formModel.address"
            placeholder="Select"
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
import { deepMerge } from '@/utils';
import { reactive } from 'vue';
interface Props {
  selectRow: tableRow;
}
interface tableRow {
  id?: string;
  age?: number;
}
const props = defineProps<Props>();
const emit = defineEmits(['submit', 'register']);
const [addmodelRegister, { openModal, closeModal: close }] = useModal({
  title: '标题',
  closable: true,
  width: 600,
});
function showModal() {
  if (props.selectRow.id) {
    //深拷贝处理
    formModel = deepMerge(formModel, props.selectRow);
    console.log({ ...formModel });
  }
  openModal();
}
function closeModal() {
  close();
}
function handleClickSubmit() {
  console.log({ ...formModel });
  emit('submit', formModel);
  close();
}
defineExpose({ showModal });

let formModel = reactive<Recordable>({});
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
}
</style>
