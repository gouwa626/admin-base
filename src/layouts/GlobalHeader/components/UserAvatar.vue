<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <HoverContainer class="flex-center avatar">
      <icon-mdi:account-child-circle class="icon" />
      <span class="name">admin</span>
    </HoverContainer>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { iconifyRender } from '@/utils';

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

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey;

  if (key === 'logout') {
    window.$dialog?.success({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        console.log('登出');
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
