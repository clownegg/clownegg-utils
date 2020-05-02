/** ローカルストレージから取り出す */
export const get = (key: string) => {
  if (!key) return null;

  const data = localStorage.getItem(key);

  if (!data) return null;

  try {
    const r = JSON.parse(data);
    return r;
  } catch (e) {
    return null;
  }
};

/** ローカルストレージにセットする */
export const set = (key: string, data: any): boolean => {
  if (!data) {
    return false;
  }

  localStorage.setItem(key, JSON.stringify(data));
  return true;
};

/** ローカルストレージから削除する */
export const remove = (key: string) => {
  localStorage.removeItem(key);
};

/** ローカルストレージの全データをクリアする */
export const clear = () => {
  localStorage.clear();
};
