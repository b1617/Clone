const outputReducer = (state = 'Hello World', action) => {
  switch (action.type) {
    case 'OUTPUT': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default outputReducer;
