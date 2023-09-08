import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OilDetailsContainer from './OilDetailsContainer';
import OilDetailsAccordion from './OilDetailsAccordion';
import Footer from '../Footer';

const PageContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  margin: 0 var(--gap-xl);
  flex-grow: 1;
`;

const AccordionWrapper = styled.div`
  margin: var(--gap-xl) var(--gap-xl) var(--gap-lg);
`;

const OilDetails = () => {
  const [contentRect, setContentRect] = useState({});
  const { id } = useParams();
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setContentRect(contentRef.current.getBoundingClientRect());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showFooter = contentRect.bottom > window.innerHeight && contentRect.bottom - window.innerHeight <= 10;

  return (
    <PageContainer>
      <ContentWrapper ref={contentRef}>
        <OilDetailsContainer oilId={id} />
      </ContentWrapper>
      <AccordionWrapper>
        <OilDetailsAccordion />
      </AccordionWrapper>
      <Footer style={{ display: showFooter ? 'block' : 'none' }} />
    </PageContainer>
  );
};

export default OilDetails;
