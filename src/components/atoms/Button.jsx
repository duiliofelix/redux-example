import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: solid 3px ${({ darkMode }) => darkMode ? 'lightgreen' : 'darkslateblue'};
  border-radius: 10px;
  box-shadow: 3px 3px;
  color: ${({ darkMode }) => darkMode ? 'lightgreen' : 'darkslateblue'};
  font-weight: bold;
  padding: 10px 20px;

  :active {
    background-color: rgba(0, 0, 0, .2);
  }

  :hover {
    border-color: ${({ darkMode }) => darkMode ? 'honeydew' : 'navy'};
    color: ${({ darkMode }) => darkMode ? 'honeydew' : 'navy'};
  }
`;

export default Button;
