import { createSelector } from 'reselect';

export const themeSelector = (state) => state.theme;

export const darkModeSelector = createSelector(
  themeSelector,
  (subState) => subState.get('darkMode'),
);

