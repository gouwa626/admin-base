import { isObject } from './is/index';
import { unref } from 'vue';
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }
  return src;
}
// dynamic use hook props
// Partial 将类型设置为可选
export function getDynamicProps<T, U>(props: T): Partial<U> {
  const ret: Recordable = {};

  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });

  return ret as Partial<U>;
}

export function findLabel(
  list: Array<any>,
  value: number | string = '',
  key = 'value',
  returnKey = 'label'
) {
  try {
    const res = list.find((item) => item[key] == value);
    return res ? res[returnKey] : '';
  } catch (error) {
    console.log(error);
    return '-';
  }
}

export function randomString(e = 10) {
  e = e || 10;
  const t = 'ABCDEFGHJKMNPQRSTWXYZ123456789';
  const a = t.length;
  let n = '';
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
