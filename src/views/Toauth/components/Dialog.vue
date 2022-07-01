<template>
  <basic-modal
    @register="addmodelRegister"
    @on-sub="handleClickSubmit"
    :title="modelTitle"
  >
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="80px">
        <n-form-item label="所属项目" path="ProjectId">
          <n-select
            v-model:value="formModel.ProjectId"
            :options="enums.projectAllData"
            @update:value="projectSelectUpdate"
            placeholder="请选择所属项目"
            label-field="ProjectName"
            value-field="ID"
            clearable
          />
        </n-form-item>
        <n-form-item label="分配资源" path="ResourceId">
          <n-select
            v-model:value="formModel.ResourceId"
            :options="ResourceList"
            placeholder="请选择分配资源"
            label-field="ResourceName"
            :render-label="renderResourceOptionLabel"
            value-field="ID"
          ></n-select>
        </n-form-item>
        <n-form-item label="分配渠道" path="AppId">
          <n-select
            v-model:value="formModel.AppId"
            :options="enums.channelAllData"
            :render-label="renderChannelOptionLabel"
            label-field="AppName"
            value-field="ID"
            placeholder="请选择分配渠道"
          />
        </n-form-item>
        <n-form-item label="限流策略" path="LimitConfig">
          <n-input
            v-model:value="formModel.LimitConfig"
            type="textarea"
            placeholder="请输入限流策略"
          />
        </n-form-item>
        <n-form-item label="备注" path="AuthorizationMemo">
          <n-input
            v-model:value="formModel.AuthorizationMemo"
            type="textarea"
            placeholder="请输入备注"
          />
        </n-form-item>
        <n-form-item label="状态" path="AuthorizationStatus">
          <n-select
            v-model:value="formModel.AuthorizationStatus"
            :options="StatusTypeList"
            placeholder="请选择状态"
          ></n-select>
        </n-form-item>
      </n-form>
    </div>
  </basic-modal>
</template>

<script setup lang="ts">
import { useModal } from '@/components/Modal';
import basicModal from '@/components/Modal/src/basicModal.vue';
import { h, ref, VNodeChild } from 'vue';
import { toauthAdd, toauthDetail, toauthUpdate } from '@/api/toauth';
import { cloneDeep } from 'lodash';
import { StatusTypeList } from '@/mock/enums';
import { ToAuthRow } from '@/typings/toauth';
import { findLabel } from '@/utils';
import { useEnumsDataStore } from '@/store';
import { projectResource } from '@/api/project';
import { SelectGroupOption, SelectOption } from 'naive-ui';
interface Props {
  selectId: string | number;
}
const defaultFormModel: ToAuthRow = {
  ProjectId: null,
  AppId: null,
  AuthorizationMemo: '',
  LimitConfig: '',
  ResourceId: null,
  AuthorizationStatus: 1,
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
  modelTitle.value = `${props.selectId ? '编辑' : '新建'}资源授权`;
  if (props.selectId) {
    getDetail();
  }
  openModal();
}

// 编辑时 获取详情
function getDetail() {
  toauthDetail(props.selectId).then((res) => {
    formModel.value = Object.assign(cloneDeep(defaultFormModel), res);
    projectSelectUpdate(formModel.value.ProjectId as string);
  });
}
function closeModal() {
  formModel;
  close();
}
function handleClickSubmit() {
  if (formModel.value.ID) {
    toauthUpdate(formModel.value).then(() => {
      emit('submit', formModel.value);
      window.$message.success('编辑成功');
      close();
    });
  } else {
    toauthAdd(formModel.value).then(() => {
      emit('submit', formModel.value);
      window.$message.success('添加成功');
      close();
    });
  }
}
defineExpose({ showModal });
const ResourceList = ref([]);
function projectSelectUpdate(val: string) {
  if (!val) {
    ResourceList.value = [];
    formModel.value.ResourceId = null;
    return;
  }
  projectResource(val).then((res) => {
    console.log(res);
    ResourceList.value = res.data;
  });
}
function renderResourceOptionLabel(option: SelectOption): VNodeChild {
  return [
    h(
      'span',
      {},
      {
        default: () => `${option.ResourceName}【${option.ResourcePath}】`,
      }
    ),
    option.label as string,
  ];
}
function renderChannelOptionLabel(option: SelectOption): VNodeChild {
  return [
    h(
      'span',
      {},
      {
        default: () => `${option.AppName}【${option.AppKey}】`,
      }
    ),
    option.label as string,
  ];
}
</script>

<style scoped lang="scss">
.form-warper {
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  // height: 800px;
}
</style>
