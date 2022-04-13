import { useMessage, useLoadingBar, MessageType } from 'naive-ui';
import type { MessageReactive, MessageOptions } from 'naive-ui';

// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
// 重写message,限制为弹出一个
const types: MessageType[] = ['success', 'info', 'warning', 'error', 'loading'];
let messageReactive: MessageReactive | null = null;
export function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  const message = useMessage();
  window.$message = useMessage();
  types.forEach((type) => {
    window.$message[type] = (s: string, options: MessageOptions) => {
      if (!messageReactive) {
        messageReactive =
          message.create(s, {
            ...options,
            type: type,
            onAfterLeave: () => {
              messageReactive = null;
            },
          }) || null;
      }
    };
  });
}
