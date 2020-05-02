/** 配列かどうかを調べます */
export const isArray = (args: any) => {
  return Array.isArray(args);
};

/** 配列の中身が空配列かどうかを調べます */
export const isEmpty = (args: any) => {
  const isArray = Array.isArray(args);

  if (isArray && args.length === 0) return true;

  return false;
};
