const outputReducer = (state = 'Hello', action) => {
  console.log('call', action.type + ' ' + state);
  switch (action.type) {
    case 'OUTPUT': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default outputReducer;
