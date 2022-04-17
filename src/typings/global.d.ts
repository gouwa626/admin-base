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
