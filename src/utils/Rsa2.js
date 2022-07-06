import JsEncrypt from './jsencrypt.min.js';

export function JsEncryptFunc(obj) {
  let encrypt = new JsEncrypt();
  // 公钥

  encrypt.setPublicKey(
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzV6bOdukUvYIjul+VCJkTOXEQWJg36germZOLHo6f4H9fDxFW0u+jw6T0qN5TniA0U272FetMlKHGvThpqwJLLM515LuukWfbiesP2OqStdIxrv709u+HAsF9DL7dhOWrJwOJEs8/2PgsMUtTZNS8COXd8pheH6t3Vdko9VTq2LmYZXDBzSo710LLgfkOvR57U21I9UarM4uBau0ROtmr9R/DI7ZCq49V81BWsevKNZv78Xq/+TrHp/uxlihDiayFGE825IojccbgcMHdWv9humGOSyQvFSn9vyC32I0X4GLXUJbHhrvPu31oAMPEWeEQGiTtHYAAM4v1j4MYR+sfwIDAQAB'
  );
  return encrypt.encrypt(obj);
}
