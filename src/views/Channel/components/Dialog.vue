<template>
  <basic-modal @register="addmodelRegister" @on-sub="handleClickSubmit" :title="modelTitle">
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="80px">
        <n-form-item label="渠道名称" path="name">
          <n-input v-model:value="formModel.name" placeholder="请输入渠道名称" />
        </n-form-item>
        <n-form-item label="AppKey" path="age">
          <n-input v-model:value="formModel.age" placeholder="请输入AppKey" />
        </n-form-item>
        <n-form-item label="密钥" path="address">
          <n-input v-model:value="formModel.address" placeholder="请输入密钥" />
        </n-form-item>
      </n-form>
    </div>
  </basic-modal>
</template>

<script setup lang="ts">
import { useModal } from '@/components/Modal';
import basicModal from '@/components/Modal/src/basicModal.vue';
import { ref, watch } from 'vue';
import type { ChannelRow } from '../index.vue';
interface Props {
  selectId: string | number;
}
const props = defineProps<Props>();
const emit = defineEmits(['submit', 'register']);
const modelTitle = ref('新建');
let [addmodelRegister, { openModal, closeModal: close }] = useModal({
  closable: true,
  width: 600,
});
function showModal() {
  openModal();
}
// 监听传过来的ID
watch(
  props,
  (val) => {
    modelTitle.value = val.selectId ? '编辑' : '新建';
  },
  {
    deep: true,
    immediate: true,
  }
);
function closeModal() {
  close();
}
function handleClickSubmit() {
  emit('submit', formModel.value);
  close();
}
defineExpose({ showModal });

let formModel = ref<Recordable>({});
</script>

<style scoped lang="scss">
.form-warper {
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  // height: 800px;
}
</style>
