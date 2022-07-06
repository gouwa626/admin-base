<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <HoverContainer class="flex-center avatar">
      <icon-mdi:account-child-circle class="icon" />
      <span class="name">admin</span>
    </HoverContainer>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { loginOut } from '@/api/login';
import { iconifyRender } from '@/utils';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';

type DropdownKey = 'user-center' | 'logout';

const options = [
  {
    label: '用户中心',
    key: 'user-center',
    icon: iconifyRender('mdi:account-circle-outline'),
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: iconifyRender('mdi:logout'),
  },
];
const cookies = useCookies();
const router = useRouter();
function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey;

  if (key === 'logout') {
    window.$dialog?.success({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        loginOut().then(() => {
          cookies.remove('token');
          router.push('/login');
        });
      },
    });
  }
}
</script>
<style scoped lang="scss">
.avatar {
  padding: 0 12px;

  .icon {
    font-size: 32px;
  }
  .name {
    padding-left: 8px;
    font-size: 16px;
  }
}
</style>
