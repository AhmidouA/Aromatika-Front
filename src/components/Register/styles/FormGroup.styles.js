import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-lg);
  width: 100%;

  & > label {
    font-size: 1.6rem;
    margin-bottom: var(--gap-sm);
    font-weight: 500;
    width: 100%;
  }

  & > input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 1.6rem;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: #3277d8;
    }

    &::placeholder {
      font-family: inherit;
      font-size: 1.6rem;
    }
  }
`;
