import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CategoryHero from './CategoryHero';
import CategoryOilList from './CategoryOilList';

import Footer from '../Footer';

const PageContainer = styled.div`
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--gap-xl);

  @media (max-width: 768px) {
    padding: 0 var(--gap-md);
  }
`;

const OilSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: var(--gap-xl);
  flex-grow: 1;
`;

const Category = () => {
  const [showHero, setShowHero] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const oilSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const oilSectionRect = oilSectionRef.current.getBoundingClientRect();
      if (oilSectionRect.top < 0) {
        setShowHero(false);
      } else {
        setShowHero(true);
      }

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageContainer>
      <Container>
        {showHero && <CategoryHero />}
        <OilSection ref={oilSectionRef}>
          <CategoryOilList onLastItemVisible={() => setShowFooter(true)} />
        </OilSection>
      </Container>
    </PageContainer>
  );
};

export default Category;


