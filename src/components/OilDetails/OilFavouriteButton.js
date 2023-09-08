import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { GiBrandyBottle } from 'react-icons/gi';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 2.4rem;
  cursor: pointer;
  color: ${(props) => (props.isFilled ? 'var(--color-purple)' : 'var(--color-gray)')};
`;

const Text = styled.span`
  color: var(--color-gray);
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  margin-left: var(--gap-xs);

  &:hover {
    color: var(--color-purple);
  }
`;

const PlusSign = styled.span`
  margin-right: 0.5rem;
`;

const MinusSign = styled.span`
  margin-right: 0.5rem;
`;

const OilFavoritesButton = ({ isHeartFilled, setIsHeartFilled, isBottleFilled, setIsBottleFilled }) => {
  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleBottleClick = () => {
    setIsBottleFilled(!isBottleFilled);
  };

  const renderHeartText = () => {
    return isHeartFilled ? 'Retirer de mes favoris' : 'Ajouter à mes favoris';
  };

  const renderBottleText = () => {
    return isBottleFilled ? 'Retirer de mon Aromathèque' : 'Ajouter à mon Aromathèque';
  };

  return (
    <Container>
      <Icon isFilled={isHeartFilled} onClick={handleHeartClick}>
        <FaHeart />
      </Icon>
      <Text onClick={handleHeartClick}>
        {isHeartFilled ? (
          <>
            <MinusSign>-</MinusSign>
            {renderHeartText()}
          </>
        ) : (
          <>
            <PlusSign>+</PlusSign>
            {renderHeartText()}
          </>
        )}
      </Text>
      <Icon isFilled={isBottleFilled} onClick={handleBottleClick} style={{ marginLeft: 'var(--gap-lg)' }}>
        <GiBrandyBottle />
      </Icon>
      <Text onClick={handleBottleClick} style={{ marginLeft: 'var(--gap-xs)' }}>
        {isBottleFilled ? (
          <>
            <MinusSign>-</MinusSign>
            {renderBottleText()}
          </>
        ) : (
          <>
            <PlusSign>+</PlusSign>
            {renderBottleText()}
          </>
        )}
      </Text>
    </Container>
  );
};

export default OilFavoritesButton;
