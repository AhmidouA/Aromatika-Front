import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: auto;
  padding: var(--padding-md);
  min-height: 65vh;
  padding-bottom: var(--gap-xl);

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 70%;
  }

  @media (min-width: 1280px) {
    max-width: 60%;
  }
`;
