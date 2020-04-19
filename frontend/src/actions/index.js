export const output = (text) => {
  return {
    type: 'OUTPUT',
    payload: text
  };
};
