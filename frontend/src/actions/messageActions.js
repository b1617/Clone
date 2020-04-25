export const message = (text) => {
  return {
    type: 'MESSAGE',
    payload: text
  };
};
