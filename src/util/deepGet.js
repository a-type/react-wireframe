const get = (val, fragment) => val && val[fragment] || undefined;

export default (obj, key) => {
  return key.split('.')
    .filter(fragment => !!fragment)
    .reduce(get, obj);
};
