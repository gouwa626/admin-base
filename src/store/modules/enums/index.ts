import { defineStore } from 'pinia';
export const enumsData = defineStore('enums-store', {
  state: () => {
    return {
      channelAllData: [],
      projectAllData: [],
      resourcesAllData: [],
    };
  },
  actions: {
    setChanelAllData() {
      console.log();
    },
  },
});
