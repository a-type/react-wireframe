import deepGet from './deepGet';

const normalizeKey = key => {
  if (key.indexOf('.') === 0) {
    return key.substring(1);
  }
  return key;
};

export default obj => {
  const enumerate = (keys, key) => {
    const value = deepGet(obj, key);
    if (typeof value === 'object') {
      return Object.keys(value)
        .map(childKey => normalizeKey(key + '.' + childKey))
        .reduce(enumerate, [...keys, key]);
    }

    return [
      ...keys,
      key,
    ];
  };

  return Object.keys(obj).reduce(enumerate, []);
}
