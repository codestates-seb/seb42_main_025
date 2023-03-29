export const imageProcess = images => {
  return images.map((url, idx) => ({ url, idx })).filter((url, idx) => idx % 2 === 1);
};
