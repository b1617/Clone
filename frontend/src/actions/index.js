export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const output = (text) => {
  return {
    type: 'OUTPUT',
    payload: text
  };
};
