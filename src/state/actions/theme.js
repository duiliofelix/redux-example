import { DARK_MODE_SET, DARK_MODE_TOGGLE, DARK_MODE_TOGGLE_REQUEST } from "../constants/theme";

export const createDarkModeToggle = () => ({
  type: DARK_MODE_TOGGLE,
});

export const createDarkModeToggleRequest = () => ({
  type: DARK_MODE_TOGGLE_REQUEST,
});

export const createDarkModeSet = (value) => ({
  type: DARK_MODE_SET,
  payload: {
    darkMode: value,
  },
});
