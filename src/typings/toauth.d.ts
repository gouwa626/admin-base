export interface ToAuthRow {
  ID?: string;
  ProjectId?: string | null;
  AppId: string | null;
  AuthorizationMemo: string;
  LimitConfig: string;
  ResourceId: string | null;
  ModifyTime?: string;
  AuthorizationStatus: number;
}
