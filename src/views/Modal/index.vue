<template>
  <div>
    <n-space>
      <n-button type="primary" @click="showModal">打开Modal可移动</n-button>
    </n-space>
    <n-divider />
    <n-space>
      <n-button type="primary" @click="showLightModal">轻量级确认</n-button>
    </n-space>
    <basicModal @register="modalRegister" ref="modalRef" class="basicModal">
      <template #title>
        <div><icon-mdi:qqchat /> 我是标题</div>
      </template>
      <template #default>
        <div>666</div>
      </template>
    </basicModal>

    <basicModal
      @register="lightModalRegister"
      class="basicModalLight"
      ref="modalRef"
      @on-sub="lightOkModal"
    >
      <template #default>
        <p>一些对话框内容</p>
      </template>
    </basicModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { basicModal, useModal } from '@/components/Modal';
const modalRef: any = ref(null);

const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
  title: '新增预约',
  showIcon: false,
  closable: false,
  width: 999,
});

const [
  lightModalRegister,
  {
    openModal: lightOpenModal,
    closeModal: lightCloseModal,
    setSubLoading: lightSetSubLoading,
  },
] = useModal({
  title: '我不需要移动',
  showIcon: false,
  type: 'warning',
  closable: true,
  maskClosable: true,
  drag: false,
});

function lightOkModal() {
  lightCloseModal();
}

function showLightModal() {
  lightOpenModal();
}

function showModal() {
  openModal();
}
</script>
<style lang="scss"></style>
