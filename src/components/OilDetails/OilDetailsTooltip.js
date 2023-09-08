import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: var(--color-gray);
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }
`;

const OilDetailsTooltip = ({ text, children }) => {
  return <Text>{children}</Text>;
};

export default OilDetailsTooltip;
