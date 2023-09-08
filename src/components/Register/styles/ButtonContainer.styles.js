import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--gap-lg);
  margin-bottom: var(--gap-lg);
  width: 100%;

  & > * {
    width: 50%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #d3d3d3;
    margin-bottom: var(--gap-lg);
  }
`;

export const ActiveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.isLoginActive ? '#d8b0c2' : '#d3d3d3')};
  color: #fff;
  font-size: 1.6rem;
  border: none;
  border-radius: 4px;
  border-right: ${(props) => (props.isLoginActive ? 'none' : '2px solid #d3d3d3')};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${(props) => (props.isLoginActive ? '#d8b0c2' : '#c7c7c7')};
  }

  &:focus {
    outline: 2px solid #ba8099;
  }
`;

export const InactiveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (!props.isLoginActive ? '#ba8099' : '#d3d3d3')};
  color: #fff;
  font-size: 1.6rem;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${(props) => (!props.isLoginActive ? '#d8b0c2' : '#c7c7c7')};
  }

  &:focus {
    outline: 3px solid #ba8099;
  }
`;

export const ValidationButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ba8099;
  color: #fff;
  font-size: 1.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: var(--gap-md);
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #d8b0c2;
  }

  &:focus {
    outline: 3px solid #ba8099;
  }
`;
