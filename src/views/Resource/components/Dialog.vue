<template>
  <basic-modal
    @register="addmodelRegister"
    @on-sub="handleClickSubmit"
    :title="modelTitle"
  >
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="100px">
        <n-form-item label="所属项目" path="ProjectId">
          <n-select
            v-model:value="formModel.ProjectId"
            placeholder="请选择所属项目"
            :options="enums.projectAllData"
            label-field="ProjectName"
            value-field="ID"
          ></n-select>
        </n-form-item>
        <n-form-item label="资源名称" path="ResourceName">
          <n-input
            v-model:value="formModel.ResourceName"
            placeholder="请输入资源名称"
          />
        </n-form-item>
        <n-form-item label="访问路径" path="ResourcePath">
          <n-input
            v-model:value="formModel.ResourcePath"
            placeholder="请输入访问路径"
          />
        </n-form-item>
        <n-form-item label="验证类型" path="VerifyType">
          <n-select
            v-model:value="formModel.VerifyType"
            placeholder="请选择验证类型"
            :options="VerifyList"
          ></n-select>
        </n-form-item>
        <n-form-item label="登录验证" path="VerifyLogin">
          <n-select
            v-model:value="formModel.VerifyLogin"
            placeholder="请选择登录验证"
            :options="VerifyLoginList"
          ></n-select>
        </n-form-item>
        <n-form-item label="权重级别" path="SortWeight">
          <n-input-number
            :show-button="false"
            v-model:value="formModel.SortWeight"
            placeholder="请输入权重级别"
          />
        </n-form-item>
        <n-form-item label="超时时间" path="Timeout">
          <n-input-number
            :show-button="false"
            v-model:value="formModel.Timeout"
            placeholder="请输入超时时间"
          />
        </n-form-item>
        <n-form-item label="重试次数" path="RetryTime">
          <n-input-number
            :show-button="false"
            v-model:value="formModel.RetryTime"
            placeholder="请输入重试次数"
          />
        </n-form-item>
        <n-form-item label="时间戳有效期" path="TimestampFlag">
          <n-input-number
            :show-button="false"
            v-model:value="formModel.TimestampFlag"
            placeholder="请输入时间戳有效期"
          />
        </n-form-item>
        <n-form-item label="记录日志" path="TimestampFlag">
          <n-select
            v-model:value="formModel.LogFlag"
            placeholder="请选择记录日志"
            :options="LogFlagList"
          ></n-select>
        </n-form-item>
        <n-form-item label="备注" path="ResourceMemo">
          <n-input
            v-model:value="formModel.ResourceMemo"
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
import { resourceAdd, resourceDetail, resourceUpdate } from '@/api/resource';
import { cloneDeep } from 'lodash';
import { ResourceRow } from '@/typings/resource';
import { randomString } from '@/utils';
import { LogFlagList, VerifyList, VerifyLoginList } from '@/mock/enums';
import { useEnumsDataStore } from '@/store';
interface Props {
  selectId: string | number;
}
const defaultFormModel: ResourceRow = {
  LogFlag: 0,
  ProjectId: null,
  ResourceMemo: '',
  ResourceName: '',
  ResourcePath: '',
  RetryTime: 0,
  SortWeight: 0,
  Timeout: 0,
  TimestampFlag: 0,
  VerifyLogin: 0,
  VerifyType: 0,
  ModifyTime: '',
};
const props = defineProps<Props>();
const emit = defineEmits(['submit', 'register']);
const formModel = ref(cloneDeep(defaultFormModel));
const modelTitle = ref('新建');
const enums = useEnumsDataStore();
let [addmodelRegister, { openModal, closeModal: close }] = useModal({
  closable: true,
  width: 600,
});
function showModal() {
  formModel.value = Object.assign(cloneDeep(defaultFormModel));
  modelTitle.value = `${props.selectId ? '编辑' : '新建'}资源`;
  if (props.selectId) {
    getDetail();
  }
  openModal();
}

// 编辑时 获取详情
function getDetail() {
  resourceDetail(props.selectId).then((res) => {
    formModel.value = Object.assign(cloneDeep(defaultFormModel), res);
  });
}
function closeModal() {
  formModel;
  close();
}
function handleClickSubmit() {
  if (formModel.value.ID) {
    resourceUpdate(formModel.value).then(() => {
      emit('submit', formModel.value);
      window.$message.success('编辑成功');
      close();
    });
  } else {
    resourceAdd(formModel.value).then(() => {
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
