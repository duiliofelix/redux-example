import { fromJS } from "immutable";
import { DARK_MODE_SET, DARK_MODE_TOGGLE } from "../constants/theme";

const initialState = fromJS({
  darkMode: true,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_TOGGLE:
      return state
        .set('darkMode', !state.get('darkMode'));

    case DARK_MODE_SET:
      return state
        .set('darkMode', action.payload.darkMode);
        
    default:
      return state;
  }
};

export default reducer;
