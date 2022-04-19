interface dataType {
  data: routerType[];
}
interface routerType {
  nodeId: string;
  nodeName: string;
  nodeCode: string;
  url: string;
  icon: string;
  portalIcon: string | null;
  location: string;
  isRoot: number;
  dspFlag: string;
  remark: string;
  buttonList?: string[];
  children?: routerType[];
  pnodeId: string;
}
export const mockRouters: dataType = {
  data: [
    {
      nodeId: 'bb2c07aaa58b4c20abf56c2ffcb9c83a',
      nodeName: '首页',
      nodeCode: 'F-01001-007',
      url: '/home',
      icon: 'mdi:home',
      portalIcon: null,
      location: '',
      isRoot: 0,
      dspFlag: '0',
      remark: '',
      children: [],
      buttonList: [],
      pnodeId: '497dac97a0ad4702af47a7d98e33dfd7',
    },
    {
      nodeId: '6959dd8faff4428c98864fea29052d0d',
      nodeName: '组件示例',
      nodeCode: 'F-01001-01',
      url: '',
      icon: 'mdi:access-point-network',
      portalIcon: null,
      location: ' ',
      isRoot: 0,
      dspFlag: '0',
      remark: '',
      buttonList: [],
      children: [
        {
          nodeId: 'd9dbd4e35243412ba18795d708d285ff',
          nodeName: '表格展示',
          nodeCode: 'F-01001-01-001',
          url: '/table',
          icon: null,
          portalIcon: null,
          location: 'table',
          isRoot: 0,
          dspFlag: '0',
          remark: '',
          buttonList: [],
          children: [],
          pnodeId: '6959dd8faff4428c98864fea29052d0d',
        },
        {
          nodeId: '5f9fef92356340118ae06bc64cc3eb55',
          nodeName: '弹窗展示',
          nodeCode: 'F-01001-01-002',
          url: '/modal',
          icon: null,
          portalIcon: null,
          location: 'modal',
          isRoot: 0,
          dspFlag: '0',
          remark: '',
          buttonList: [],
          children: [],
          pnodeId: '6959dd8faff4428c98864fea29052d0d',
        },
      ],
      pnodeId: '497dac97a0ad4702af47a7d98e33dfd7',
    },
    {
      nodeId: 'd431fee7902f4d7ab031ff13c74b8ef8',
      nodeName: '两个都要',
      nodeCode: 'F-01001-05',
      url: '',
      icon: 'mdi:access-point',
      portalIcon: null,
      location: '',
      isRoot: 0,
      dspFlag: '0',
      remark: '',
      buttonList: [],
      children: [
        {
          nodeId: '9a3122c1400e461792c195d1a7f4c74e',
          nodeName: '鱼和熊掌不可兼得',
          nodeCode: 'F-01001-05-002',
          url: '',
          icon: null,
          portalIcon: null,
          location: '',
          isRoot: 0,
          dspFlag: '0',
          remark: '',
          buttonList: [],
          pnodeId: 'd431fee7902f4d7ab031ff13c74b8ef8',
        },
      ],
      pnodeId: '497dac97a0ad4702af47a7d98e33dfd7',
    },
  ],
};
