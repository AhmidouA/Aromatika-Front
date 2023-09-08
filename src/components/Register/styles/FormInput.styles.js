import styled from 'styled-components';

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #285fba;
  }
`;
