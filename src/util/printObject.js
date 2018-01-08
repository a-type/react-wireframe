export default obj => {
  if (typeof obj === 'string') {
    return JSON.stringify(obj);
  }
  const str = JSON.stringify(obj);
  if (str.length > 20) {
    return str.substr(0, 17) + '...';
  }
  return str;
};
