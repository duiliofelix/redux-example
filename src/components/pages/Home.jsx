import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/Button';
import MainContainer from '../atoms/MainContainer';
import { createDarkModeToggle, toggleWithDelay } from '../../state/actions/theme';
import { darkModeSelector } from '../../state/selectors/theme';

const Home = () => {
  const darkMode = useSelector(darkModeSelector);
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => dispatch(createDarkModeToggle()));
  const handleDelayedToggle = useCallback(() => dispatch(toggleWithDelay()));

  return (
    <MainContainer darkMode={darkMode}>
      <Button
        onClick={handleToggle}
        darkMode={darkMode}
      >
        {darkMode ? 'To Light' : 'To Dark' }
      </Button>
      <Button
        onClick={handleDelayedToggle}
        darkMode={darkMode}
      >
        Delayed {darkMode ? 'To Light' : 'To Dark' }
      </Button>
    </MainContainer>
  );
};

export default Home;
