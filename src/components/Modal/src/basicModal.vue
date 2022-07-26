<template>
  <n-modal
    id="basic-modal"
    v-bind="getBindValue"
    v-model:show="isModal"
    @close="onCloseModal"
    :style="`width:${getBindValue.width}px`"
  >
    <template #header>
      <div
        class="w-full"
        id="basic-modal-bar"
        :class="needDrag && 'cursor-move'"
      >
        <slot name="title" v-if="$slots.title"></slot>
        <div class="wh-full" v-else>{{ getBindValue.title }}</div>
      </div>
    </template>
    <template #default>
      <div class="basic-modal-warper">
        <slot name="default"></slot>
      </div>
    </template>
    <template #action v-if="!$slots.action">
      <n-space>
        <n-button @click="closeModal">取消</n-button>
        <n-button type="primary" :loading="subLoading" @click="handleSubmit">{{
          subBtuText
        }}</n-button>
      </n-space>
    </template>
    <template v-else #action>
      <slot name="action"></slot>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import {
  getCurrentInstance,
  ref,
  nextTick,
  unref,
  computed,
  useAttrs,
  defineEmits,
  defineProps,
  watch,
} from 'vue';
import { basicProps } from './props';
import startDrag from '@/utils/drag';
import { deepMerge } from '@/utils';
import { ModalProps, ModalMethods } from './type';
import { useBodyScroll } from '@/hooks';

const attrs = useAttrs();
const props = defineProps({ ...basicProps });
const emit = defineEmits(['on-close', 'on-sub', 'register']);
const { scrollBodyHandler } = useBodyScroll();
const propsRef = ref<Partial<ModalProps> | null>(null);

const isModal = ref(false);
//提交按钮loading
const subLoading = ref(false);
//合并props
const getProps = computed(() => {
  return { ...props, ...(unref(propsRef) as any) };
});
// 确定按钮文案
const subBtuText = computed(() => {
  const { subBtuText } = propsRef.value as any;
  return subBtuText || props.subBtuText;
});
//设置最终props
async function setProps(modalProps: Partial<ModalProps>): Promise<void> {
  propsRef.value = deepMerge(unref(propsRef) || ({} as any), modalProps);
}
// 设置属性
const getBindValue = computed(() => {
  return {
    ...attrs,
    ...unref(getProps),
    ...unref(propsRef),
  };
});
// 是否需要移动
const needDrag = computed(() => {
  const { drag } = getBindValue.value as any;
  return drag;
});
//设置按钮loading
function setSubLoading(status: boolean) {
  subLoading.value = status;
}

function openModal() {
  isModal.value = true;
  if (needDrag.value) {
    nextTick(() => {
      const oBox = document.getElementById('basic-modal');
      const oBar = document.getElementById('basic-modal-bar');
      startDrag(oBar, oBox);
    });
  }
}

function closeModal() {
  isModal.value = false;
  subLoading.value = false;
  emit('on-close');
}

function onCloseModal() {
  isModal.value = false;
  emit('on-close');
}

function handleSubmit() {
  subLoading.value = true;
  emit('on-sub');
}

const modalMethods: ModalMethods = {
  setProps,
  openModal,
  closeModal,
  setSubLoading,
};

const instance = getCurrentInstance();
if (instance) {
  emit('register', modalMethods);
}
watch(
  () => isModal.value,
  (newValue) => scrollBodyHandler(newValue)
);
</script>

<style lang="scss">
.basic-modal-warper {
  max-height: 80vh;
  overflow-y: auto;
}
</style>
