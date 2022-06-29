interface Window {
  $conf: Conf;
  $dialog?: import('naive-ui').DialogProviderInst;
  $loadingBar?: import('naive-ui').LoadingBarProviderInst;
  $message: MessageType;
}
interface MessageType {
  success?: function;
  info?: function;
  warning?: function;
  error?: function;
  loading?: function;
  default?: function;
}
declare type Nullable<T> = T | null;
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type Recordable<T = any> = Record<string, T>;

interface ResponseType {
  code: number;
  data: T;
  msg: string;
}
