import { defineStore } from 'pinia';
type ConfState = Conf.Setting;
export const userConf = defineStore('conf-store', {
  state: (): ConfState => {
    return {
      title: 'xxx管理系统',
      icon: 'mdi:book',
    };
  },
});
