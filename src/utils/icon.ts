import { h } from 'vue';
import { Icon } from '@iconify/vue';
import { NIcon } from 'naive-ui';
import SvgIcon from '@/components/custom/SvgIcon.vue';

/**
 * 动态渲染iconify
 * @param icon - 图标名称
 * @param color - 图标颜色
 * @param size - 图标大小
 */
export function iconifyRender(icon: string, color?: string, size?: number) {
  const style: { color?: string; size?: string; fill?: string } = {};
  if (color) {
    style.color = color;
  }
  if (size) {
    style.size = `${size}px`;
    style.fill = 'currentColor';
  }
  return () => h(Icon, { icon, style });
}
/**
 * 动态渲染自定义图标
 * @param icon - 图标名称
 * @param color - 图标颜色
 * @param size - 图标大小
 */
export function customIconRender(icon: string, color?: string, size?: number) {
  const style: { color?: string; size?: string; fill?: string } = {};
  if (color) {
    style.color = color;
  }
  if (size) {
    style.size = `${size}px`;
    style.fill = 'currentColor';
  }

  return () => h(NIcon, null, { default: () => h(SvgIcon, { icon, style }) });
}
export function importSvgIcons() {
  // 遍历require.context的返回模块，并导入
  const requireAll = (requireContext: any) => {
    return requireContext.keys().map(requireContext);
  };
  // import所有符合条件的svg 三个参数：文件夹、是否使用子文件夹、正则
  const req = require.context('@/assets/svg', true, /\.svg$/);
  requireAll(req);
}
