import styled from 'styled-components';

const MainContainer = styled.div`
  align-items: center;
  background-color: ${({ darkMode }) => darkMode ? 'navy' : 'honeydew'};
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  left: 0;
  right: 0;
  position: absolute;
  top: 0;
`;

export default MainContainer;
