export interface ToAuthRow {
  ID?: string;
  ProjectId?: string | null;
  ProjectName?: string;
  AppId: string | null;
  AppKey?: string;
  AppName?: string;
  AuthorizationMemo: string;
  LimitConfig: string;
  ResourceId: string | null;
  ResourcePath?: string;
  ModifyTime?: string;
  AuthorizationStatus: number;
}
