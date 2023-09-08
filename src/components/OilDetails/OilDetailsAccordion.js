import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AccordionContainer = styled.div`
  margin-bottom: var(--gap-lg);
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-md);
  cursor: pointer;
  border-bottom: 1px solid var(--color-gray-light);

  &:hover {
    background-color: var(--color-bg-dark);
  }
`;

const AccordionTitle = styled.h3`
  font-size: 1.8rem;
  color: ${(props) => (props.isOpen ? 'var(--color-purple-dark)' : 'var(--color-gray)')};
`;

const AccordionIcon = styled.div`
  font-size: 2rem;
`;

const AccordionContent = styled.div`
  padding: var(--gap-md);
`;

const AccordionWrapper = styled.div`
  margin: 0 var(--gap-xl);
  height: 300px; /* set a fixed height */
  overflow-y: scroll; /* add a scroll bar */
`;

const OilDetailsAccordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
    setActiveAccordion(1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
    setActiveAccordion(2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
    setActiveAccordion(3);
  };

  return (
    <AccordionWrapper>
      <AccordionContainer>
        <AccordionHeader onClick={handleToggle1}>
          <AccordionTitle isOpen={isOpen1}>Conseil d'utilisation</AccordionTitle>
          <AccordionIcon>{isOpen1 ? <FiChevronUp /> : <FiChevronDown />}</AccordionIcon>
        </AccordionHeader>

        <Collapse isOpened={isOpen1} transition='height 300ms ease-in-out'>
          <AccordionContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionContent>
        </Collapse>
      </AccordionContainer>

      <AccordionContainer>
        <AccordionHeader onClick={handleToggle2}>
          <AccordionTitle isOpen={isOpen2}>Précaution d'emploi</AccordionTitle>
          <AccordionIcon>{isOpen2 ? <FiChevronUp /> : <FiChevronDown />}</AccordionIcon>
        </AccordionHeader>
        <Collapse isOpened={isOpen2} transition='height 300ms ease-in-out'>
          <AccordionContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionContent>
        </Collapse>
      </AccordionContainer>

      <AccordionContainer>
        <AccordionHeader onClick={handleToggle3}>
          <AccordionTitle isOpen={isOpen3}>Le réflexe</AccordionTitle>
          <AccordionIcon>{isOpen3 ? <FiChevronUp /> : <FiChevronDown />}</AccordionIcon>
        </AccordionHeader>
        <Collapse isOpened={isOpen3} transition='height 300ms ease-in-out'>
          <AccordionContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionContent>
        </Collapse>
      </AccordionContainer>
    </AccordionWrapper>
  );
};

export default OilDetailsAccordion;
