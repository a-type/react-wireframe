export default (obj, keys) => Object.keys(obj).filter(key => !keys.includes(key)).reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});
