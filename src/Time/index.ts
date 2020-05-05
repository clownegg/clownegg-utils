import {DateTime} from 'luxon';

const df = 'yyyy-MM-dd hh:mm:ss';

/** sleep  */
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

/** 現在の時間を指定のフォーマットで返す  */
export const now = (format = df) => {
  const dt = DateTime.local();
  return dt.toFormat(format);
};

/** 入力された日にちを指定のフォーマットで返す */
export const format = (t: string, f = df, locale = 'ja') => {
  const dt = DateTime.fromFormat(t, f, {locale});
  return dt;
};

/** base時間が比較対象の時間より前にあるかどうかをチェックする */
export const isBefore = (base: string, compare: string) => {
  const baseDt = DateTime.fromString(base, df);
  const compareDt = DateTime.fromString(compare, df);

  if (baseDt < compareDt) return true;
  else return false;
};

/** base時間が比較対象の時間より後にあるかどうかをチェックする */
export const isAfter = (base: string, compare: string) => {
  const baseDt = DateTime.fromString(base, df);
  const compareDt = DateTime.fromString(compare, df);

  if (baseDt > compareDt) return true;
  else return false;
};

/** 入力された日付が有効かチェックする */
export const isValid = (base: string) => {
  const dt = DateTime.fromFormat(base, df);
  return dt.isValid;
};
