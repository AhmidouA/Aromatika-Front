import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OilContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--gap-lg);
  margin-bottom: var(--gap-lg);
  width: 100%;
  padding-bottom: calc(15rem + var(--gap-lg));

  /* Hide footer until last item is reached */
  > .footer {
    display: none;
  }

  /* Show footer when last item is reached */
  &.show-footer > .footer {
    display: flex;
  }

  /* Add margin between last item and footer */
  &.show-footer > .oil-content:last-child {
    margin-bottom: var(--gap-lg);
  }

  /* Add gap between rows on small screens */
  @media (max-width: 768px) {
    gap: var(--gap-lg);
    margin-bottom: calc(var(--gap-lg) * 2);
  }
`;

const OilContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: var(--gap-lg);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  &:hover {
    box-shadow: 0px 0px 10px rgba(186, 128, 153, 0.4);
    transition: box-shadow 0.4s ease-in-out;
  }

  /* Image on top for small screens */
  @media (max-width: 768px) {
    border-bottom: 1px solid var(--color-purple-light);
    flex-direction: column;
    align-items: center;
  }

  /* Image on left for even rows, image on right for odd rows */
  @media (min-width: 769px) {
    flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
  }
`;
const OilImageContainer = styled.figure`
  margin: 0;
  padding: 0;
  width: 250px;
  height: 250px;

  /* Small image size for small screens */
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: var(--gap-xl);
  }

  /* Add margin between text and image on big screens */
  @media (min-width: 769px) {
    margin-right: ${({ index }) => (index % 2 === 0 ? 'var(--gap-xl)' : 0)};
    margin-left: ${({ index }) => (index % 2 === 1 ? 'auto' : 0)};
    flex: 0 0 250px;
    height: 250px;
  }
`;

const OilImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OilDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  line-height: 2.6rem;
  margin: 0 var(--gap-md);
  justify-content: center;
  padding: 0 var(--gap-md);
  text-align: ${({ index }) => (index % 2 === 0 ? 'left' : 'right')};
  max-width: 60%;

  /* Text on right for odd rows, text on left for even rows */
  @media (min-width: 769px) {
    text-align: ${({ index }) => (index % 2 === 0 ? 'right' : 'left')};
    max-width: ${({ index }) => (index % 2 === 0 ? '70%' : '70%')};
  }

  /* Justify center text for small screens */
  @media (max-width: 768px) {
    margin: var(--gap-md) 0;
    max-width: unset;
  }
`;

const OilTitle = styled.h2`
  margin-bottom: var(--gap-sm);
  text-align: left;

  /* Justify center text for small screens */
  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: var(--gap-lg);
    text-align: center;
  }
`;

const OilSubTitle = styled.p`
  font-weight: bold;
  text-align: left;

  /* Justify center text for small screens */
  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: var(--gap-md);
    text-align: center;
  }
`;

const LearnMoreLink = styled.a`
  font-size: ${({ isMobile }) => (isMobile ? '1.6rem' : '1.8rem')};
  text-align: left;
  color: var(--color-purple);
  text-decoration: none;

  /* Justify center text for small screens */
  @media (max-width: 768px) {
    justify-self: center;
    text-align: center;
    margin-top: 0;
  }

  &:hover,
  &:active {
    color: var(--color-purple-dark);
    text-decoration: none;
  }

  &:visited {
    /* color: var(--color-orange); */
  }
`;

const CategoryList = () => {
  const { id } = useParams();
  console.log(id);
  const containerRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);
  const [oils, setOils] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axiosInstance.get(`/category/${id}`);
        const data = response.data;
        console.log(data.categoryWithOil);
        setOils(
          data.categoryWithOil.map((oil) => ({
            id: oil.id,
            image: `/img/essentialOils/${oil.name}.png`,
            title: `Huile essentielle ${oil.name.charAt(0).match(/[aeiou]/i) ? "d'" : 'de '}${oil.name}`,
            description: oil.description,
            link: '#',
          }))
        );
      } catch (error) {
        console.log('Error while fetching oils:', error);
      }
    };
    getCategory();
  }, [id]);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container && container.getBoundingClientRect().bottom <= window.innerHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <OilContainer className={showFooter ? 'show-footer' : ''} ref={containerRef}>
        {oils.length > 0 &&
          oils.map((oil, index) => (
            <OilContent key={index} index={index}>
              <OilImageContainer>
                <OilImage src={oil.image} alt={oil.title} index={index} />
              </OilImageContainer>
              <OilDescription index={index}>
                <OilTitle>{oil.title}</OilTitle>
                <OilSubTitle>{oil.description}</OilSubTitle>
                <LearnMoreLink as={Link} to={`/oil/${oil.id}`}>
                  En savoir plus →
                </LearnMoreLink>
              </OilDescription>
            </OilContent>
          ))}
      </OilContainer>
    </>
  );
};

export default CategoryList;
