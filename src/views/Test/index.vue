<template>
  <div>
    <n-space>
      <n-button type="primary" @click="showModal">打开Modal嵌套Form例子</n-button>
    </n-space>
    <n-divider />
    <n-space>
      <n-button type="primary" @click="showLightModal">轻量级确认</n-button>
    </n-space>
    <basicModal @register="modalRegister" ref="modalRef" class="basicModal" @on-ok="okModal">
      <template #default>
        <div>666</div>
      </template>
    </basicModal>

    <basicModal
      @register="lightModalRegister"
      class="basicModalLight"
      ref="modalRef"
      @on-ok="lightOkModal"
    >
      <template #default>
        <p class="text-gray-500" style="padding-left: 35px">一些对话框内容</p>
      </template>
    </basicModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useMessage } from 'naive-ui';
import { basicModal, useModal } from '@/components/Modal';

export default defineComponent({
  components: { basicModal },
  setup() {
    const modalRef: any = ref(null);
    const message = useMessage();

    const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
      title: '新增预约',
    });

    const [
      lightModalRegister,
      { openModal: lightOpenModal, closeModal: lightCloseModal, setSubLoading: lightSetSubLoading },
    ] = useModal({
      title: '确认对话框',
      showIcon: true,
      type: 'warning',
      closable: false,
      maskClosable: true,
    });

    const state = reactive({
      formValue: {
        name: '小马哥',
      },
    });

    async function okModal() {
      const formRes = true;
      if (formRes) {
        closeModal();
        message.success('提交成功');
      } else {
        message.error('验证失败，请填写完整信息');
        setSubLoading(false);
      }
    }

    function lightOkModal() {
      lightCloseModal();
    }

    function showLightModal() {
      lightOpenModal();
    }

    function showModal() {
      openModal();
    }

    function handleReset(values: any) {
      console.log(values);
    }
    const register = ref(0);
    return {
      ...toRefs(state),
      modalRef,
      register,
      modalRegister,
      lightModalRegister,
      handleReset,
      showModal,
      okModal,
      lightOkModal,
      showLightModal,
    };
  },
});
</script>

<style lang="scss">
.basicForm {
  padding-top: 20px;
}

.n-dialog.basicModal {
  width: 640px;
}

.n-dialog.basicModalLight {
  width: 416px;
  padding-top: 26px;
}
</style>
