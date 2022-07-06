<template>
  <basic-modal
    @register="addmodelRegister"
    @on-sub="handleClickSubmit"
    :title="modelTitle"
  >
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="80px">
        <n-form-item label="渠道名称" path="AppName">
          <n-input
            v-model:value="formModel.AppName"
            placeholder="请输入渠道名称"
          />
        </n-form-item>
        <n-form-item label="AppKey" path="AppKey">
          <n-input
            v-model:value="formModel.AppKey"
            placeholder="请输入AppKey"
          />
        </n-form-item>
        <n-form-item label="密钥" path="AppSecret">
          <n-input
            v-model:value="formModel.AppSecret"
            placeholder="请输入密钥"
          />
        </n-form-item>
        <n-form-item label="安全策略" path="VerifyType">
          <n-select
            v-model:value="formModel.VerifyType"
            :options="VerifyList"
            placeholder="请输入安全策略"
          />
        </n-form-item>
        <n-form-item label="渠道类型" path="AppType">
          <n-select
            v-model:value="formModel.AppType"
            :options="AppTypeList"
            placeholder="请输入渠道类型"
          />
        </n-form-item>
        <n-form-item label="备注" path="AppMemo">
          <n-input
            v-model:value="formModel.AppMemo"
            type="textarea"
            placeholder="请输入备注"
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
import { channelAdd, channelDetail, channelUpdate } from '@/api/channel';
import { cloneDeep } from 'lodash';
import { VerifyList, AppTypeList } from '@/mock/enums';
import { ChannelRow } from '@/typings/channel';
import { randomString } from '@/utils';
interface Props {
  selectId: string | number;
}
const defaultFormModel: ChannelRow = {
  AppKey: '',
  AppName: '',
  AppMemo: '',
  AppSecret: '',
  AppType: 0,
  VerifyType: 0,
  CreateTime: '',
  ModifyTime: '',
};
const props = defineProps<Props>();
const emit = defineEmits(['submit', 'register']);
const formModel = ref(cloneDeep(defaultFormModel));
const modelTitle = ref('新建');
let [addmodelRegister, { openModal, closeModal: close }] = useModal({
  closable: true,
  width: 600,
});
function showModal() {
  formModel.value = Object.assign(cloneDeep(defaultFormModel));
  formModel.value.AppSecret = randomString();
  console.log('selectId', props.selectId);
  modelTitle.value = `${props.selectId ? '编辑' : '新建'}渠道`;
  if (props.selectId) {
    getDetail();
  }
  openModal();
}

// 编辑时 获取详情
function getDetail() {
  channelDetail(props.selectId).then((res) => {
    formModel.value = Object.assign(cloneDeep(defaultFormModel), res);
  });
}
function closeModal() {
  close();
}
function handleClickSubmit() {
  if (formModel.value.ID) {
    channelUpdate(formModel.value).then(() => {
      emit('submit', formModel.value);
      window.$message.success('编辑成功');
      close();
    });
  } else {
    channelAdd(formModel.value).then(() => {
      emit('submit', formModel.value);
      window.$message.success('添加成功');
      close();
    });
  }
}
defineExpose({ showModal });
</script>

<style scoped lang="scss">
.form-warper {
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  // height: 800px;
}
</style>
