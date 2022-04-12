interface Window {
  $conf: Conf;
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
