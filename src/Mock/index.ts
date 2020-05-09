import {lastName as _lastName} from './LastName';

const _min = 1;
const _max = 10;

const rnd = (max: number = _max) => {
  const r = Math.floor(Math.random() * max) + _min;
  return r;
};

/** 名字を返す  */
export const lastName = () => {
  const n = _lastName.map((ln) => ln.name);
  const r = rnd(n.length);

  return r > n.length ? n[1] : n[r];
};

/** 血液型を返す */
export const BloodType = () => {
  const types = ['A', 'B', 'AB', 'O'];
  const r = rnd(types.length);

  return r > types.length ? types[1] : types[r];
};
