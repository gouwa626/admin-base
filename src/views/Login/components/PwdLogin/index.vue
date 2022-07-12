<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    size="large"
    :show-label="false"
  >
    <n-form-item path="userName">
      <n-input v-model:value="model.userName" placeholder="请输入手机号码" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        placeholder="请输入密码"
      />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="loading"
        @click="handleSubmit"
      >
        确定
      </n-button>
    </n-space>
  </n-form>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { loginIn } from '@/api/login';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';

/** 表单规则 */
const formRules = {
  userName: [{ required: true, message: '请输入手机号码' }],
  password: [{ required: true, message: '请输入密码' }],
};
const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  userName: 'admin',
  password: '',
});
const rules: FormRules = {
  userName: formRules.userName,
  password: formRules.password,
};
const rememberMe = ref(false);
const loading = ref(false);
const cookies = useCookies();
const router = useRouter();
function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return;
  e.preventDefault();

  formRef.value.validate((errors) => {
    if (!errors) {
      loading.value = true;
      loginIn(model)
        .then((res) => {
          cookies.set('token', res);
          if (rememberMe.value) {
            cookies.set('userName', model.userName);
            cookies.set('password', model.password);
          } else {
            cookies.remove('userName');
            cookies.remove('password');
          }
          setTimeout(() => {
            loading.value = false;
            router.push('/home');
          }, 500);
        })
        .catch((err) => {
          loading.value = false;
          window.$message.error(err.msg);
        });
    }
  });
}
onMounted(() => {
  model.userName = cookies.get('userName', model.userName) || 'admin';
  model.password = cookies.get('password', model.password) || '';
});
</script>
<style scoped></style>
