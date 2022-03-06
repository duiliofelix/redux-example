const initialState = {
  user: null,
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'USER/SET':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
