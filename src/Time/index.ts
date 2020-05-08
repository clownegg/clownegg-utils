import {DateTime} from 'luxon';

const df = 'yyyy-MM-dd hh:mm:ss';
const dl = 'ja-JP';

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

/** 入力された日付を指定のフォーマットで返す */
export const format = (t: string, f = df, locale = dl) => {
  const dt = DateTime.fromFormat(t, f, {locale});
  return dt;
};

/** base時間が比較対象の時間より前にあるかどうかをチェックする */
export const isBefore = (base: string, compare: string, locale = dl) => {
  const baseDt = DateTime.fromString(base, df, {locale});
  const compareDt = DateTime.fromString(compare, df, {locale});

  if (baseDt < compareDt) return true;
  else return false;
};

/** base時間が比較対象の時間より後にあるかどうかをチェックする */
export const isAfter = (base: string, compare: string, locale = dl) => {
  const baseDt = DateTime.fromString(base, df, {locale});
  const compareDt = DateTime.fromString(compare, df, {locale});

  if (baseDt > compareDt) return true;
  else return false;
};

/** 入力された日付が有効かチェックする */
export const isValid = (base: string, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.isValid;
};

/** 指定した日数を加算した日付を返す */
export const plusDays = (base: string, day: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.plus({days: day});
};

/** 指定した週数を加算した日付を返す */
export const plusWeeks = (base: string, week: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.plus({weeks: week});
};

/** 指定した月数を加算した日付を返す */
export const plusMonths = (base: string, month: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.plus({months: month});
};

/** 指定した年数を加算した日付を返す */
export const plusYears = (base: string, year: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.plus({years: year});
};

/** 指定した日数を減算した日付を返す */
export const minusDays = (base: string, day: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.minus({days: day});
};

/** 指定した週数を減算した日付を返す */
export const minusWeeks = (base: string, week: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.minus({weeks: week});
};

/** 指定した月数を減算した日付を返す */
export const minusMonths = (base: string, month: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.minus({months: month});
};

/** 指定した年数を減算した日付を返す */
export const minusYears = (base: string, year: number, locale = dl) => {
  const dt = DateTime.fromFormat(base, df, {locale});
  return dt.minus({years: year});
};

/** 指定した年がうるう年かどうか判断する */
export const isLeapYear = (year: number) => {
  const dt = DateTime.local(year);
  return dt.isInLeapYear;
};
