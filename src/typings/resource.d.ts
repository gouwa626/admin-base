export interface ResourceRow {
  ID?: string;
  LogFlag: number;
  ProjectId: string | null;
  ResourceMemo: string;
  ResourceName: string;
  ResourcePath: string;
  RetryTime: number;
  SortWeight: number;
  Timeout: number;
  TimestampFlag: number;
  VerifyLogin: number;
  VerifyType: number;
  ModifyTime?: string;
}
