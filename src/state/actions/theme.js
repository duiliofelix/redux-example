import { DARK_MODE_SET, DARK_MODE_TOGGLE } from "../constants/theme";

export const createDarkModeToggle = () => ({
  type: DARK_MODE_TOGGLE,
});

export const toggleWithDelay = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createDarkModeToggle());
    }, 1000);
  };
};

export const createDarkModeSet = (value) => ({
  type: DARK_MODE_SET,
  payload: {
    darkMode: value,
  },
});
