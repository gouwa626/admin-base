import { channelList } from '@/api/channel';
import { projectList } from '@/api/project';
import { resourceList } from '@/api/resource';
import { defineStore } from 'pinia';
export const useEnumsDataStore = defineStore('enums-store', {
  state: () => {
    return {
      channelAllData: [],
      projectAllData: [],
      resourceAllData: [],
    };
  },
  actions: {
    setChanelAllData() {
      channelList({
        page: 1,
        pageSize: 0,
        startIndex: 1,
        endIndex: 1,
        itemCount: 1,
        pageCount: 1,
      }).then((res) => {
        this.channelAllData = res.data;
      });
    },
    setProjectAllData() {
      projectList({
        page: 1,
        pageSize: 0,
        startIndex: 1,
        endIndex: 1,
        itemCount: 1,
        pageCount: 1,
      }).then((res) => {
        this.projectAllData = res.data;
      });
    },
    setResourceAllData() {
      resourceList({
        page: 1,
        pageSize: 0,
        startIndex: 1,
        endIndex: 1,
        itemCount: 1,
        pageCount: 1,
      }).then((res) => {
        this.resourceAllData = res.data;
      });
    },
    setEnumsDataData() {
      this.setChanelAllData();
      this.setProjectAllData();
      this.setResourceAllData();
    },
  },
});
