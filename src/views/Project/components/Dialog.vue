<template>
  <basic-modal
    @register="addmodelRegister"
    @on-sub="handleClickSubmit"
    :title="modelTitle"
  >
    <div class="form-warper">
      <n-form :model="formModel" label-placement="left" label-width="80px">
        <n-form-item label="项目名称" path="ProjectName">
          <n-input
            v-model:value="formModel.ProjectName"
            placeholder="请输入项目名称"
          />
        </n-form-item>
        <n-form-item label="项目前缀" path="Prefix">
          <n-input
            v-model:value="formModel.Prefix"
            placeholder="请输入项目前缀"
          />
        </n-form-item>
        <n-form-item label="访问地址" path="ProjectPath">
          <n-input
            v-model:value="formModel.ProjectPath"
            placeholder="请输入访问地址"
          />
        </n-form-item>
        <n-form-item label="项目类型" path="ProjectType">
          <n-select
            v-model:value="formModel.ProjectType"
            :options="ProjectTypeList"
            placeholder="请输入项目类型"
          />
        </n-form-item>
        <n-form-item label="备注" path="ProjectMemo">
          <n-input
            v-model:value="formModel.ProjectMemo"
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
import { nextTick, ref } from 'vue';
import { projectAdd, projectDetail, projectUpdate } from '@/api/project';
import { cloneDeep } from 'lodash';
import { ProjectTypeList } from '@/mock/enums';
import { ProjectRow } from '@/typings/project';
import { randomString } from '@/utils';
interface Props {
  selectId: string | number;
}
const defaultFormModel: ProjectRow = {
  Prefix: '',
  ProjectMemo: '',
  ProjectName: '',
  ProjectPath: '',
  ProjectType: 0,
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
  console.log('selectId', props.selectId);
  modelTitle.value = `${props.selectId ? '编辑' : '新建'}项目`;
  if (props.selectId) {
    getDetail();
  }
  openModal();
}

// 编辑时 获取详情
function getDetail() {
  projectDetail(props.selectId).then((res) => {
    formModel.value = Object.assign(cloneDeep(defaultFormModel), res);
  });
}
function closeModal() {
  formModel;
  close();
}
function handleClickSubmit() {
  if (formModel.value.ID) {
    projectUpdate(formModel.value).then(() => {
      emit('submit', formModel.value);
      window.$message.success('编辑成功');
      close();
    });
  } else {
    projectAdd(formModel.value).then(() => {
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
