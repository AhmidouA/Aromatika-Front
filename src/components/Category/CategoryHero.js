import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import styled from 'styled-components';
import Spinner from '../Spinner';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--gap-lg);
  margin-bottom: var(--gap-lg);
  background-color: #fff;
  width: 100%;
  padding: 0;

  /* On medium screen */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: calc(100vh - var(--gap-lg) - var(--footer-height));
  }

  /* On large screen */
  @media (min-width: 1024px) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;

  /* On medium screen */
  @media (min-width: 768px) {
    height: 100%;
    width: 50%;
    margin-right: var(--gap-lg);
    overflow: visible;
  }

  /* On large screen */
  @media (min-width: 1024px) {
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: var(--gap-md);

  /* On medium screen */
  @media (min-width: 768px) {
    width: 50%;
    height: auto;
    padding: var(--gap-lg);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: var(--gap-lg);
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  overflow-y: scroll;
  max-height: 40vh;

  /* On smaller screen */
  @media (max-width: 767px) {
    max-height: none;
    overflow-y: visible;
  }
`;

const getCategoryName = (categoryId) => {
  switch (categoryId) {
    case 1:
      return 'Cosmetique';
    case 2:
      return 'Enfant et nourrissons';
    case 3:
      return 'Femmes enceintes';
    case 4:
      return 'Stress et anxiété';
    case 5:
      return 'Sportifs';
    case 6:
      return 'Bien-être';
    case 7:
      return 'Usage domestique';
    case 8:
      return 'Diffusion';
    default:
      return 'Catégorie inconnue';
  }
};

const CategoryHero = () => {
  const { id } = useParams();
  console.log(id);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axiosInstance.get(`/category/${id}`);
        const categoryName = getCategoryName(response.data.category_id);
        setCategory({
          ...response.data,
          category_name: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
        });
      } catch (error) {
        console.log('Error while fetching category:', error);
      }
    };
    getCategory();
  }, [id]);

  if (!category) {
    return <Spinner />;
  }

  return (
    <HeroSection>
      <ImageContainer>
        <Image src='/img/Category-Zen.jpg' alt='Category Image' />
      </ImageContainer>
      <TextContainer>
        <Title>{category.category_name}</Title>
        <Description>{category.category_description}</Description>
      </TextContainer>
    </HeroSection>
  );
};

export default CategoryHero;
