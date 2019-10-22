/*
 * 配列の中身が空配列かどうかを調べます
 * @params {Array} - array
 */
export const isEmpty = (array: any[]) => {
  if (array.length === 0) {
    return true;
  }

  return false;
};
