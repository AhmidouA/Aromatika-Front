import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import styled from 'styled-components';
import { GiBrandyBottle } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import OilDetailsTooltip from './OilDetailsTooltip';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';

// Container for the whole page
const Container = styled.div`
  background-color: var(--color-white);
  margin: var(--gap-md) var(--gap-xl) var(--gap-md) calc(var(--gap-xl) + 1rem); /* Add 1rem margin-left here */
  padding: var(--gap-xl);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--gap-lg);

  @media only screen and (max-width: 767px) {
    margin: var(--gap-md) var(--gap-md) var(--gap-md) var(--gap-md); /* Update margin values for mobile */
    padding: var(--gap-md);
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'title'
      'description'
      'image'
      'icons';
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--gap-xl);
    justify-items: center;
  }
`;

// Styling for the oil image wrapper
const OilImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: var(--gap-md);
  margin-bottom: var(--gap-md);

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-left: 2rem;
    margin-bottom: 0;
    margin-right: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
    max-width: 500px;
    margin-right: var(--gap-xl);
    margin-left: 0;
    margin-bottom: 0;
    margin-left: var(--gap-lg);
  }

  @media only screen and (max-width: 767px) {
    grid-area: image;
    margin-top: 0;
    margin-bottom: var(--gap-md);
  }
`;

// Styling for the oil image
const OilImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: var(--gap-md);

  @media only screen and (max-width: 767px) {
    grid-area: image;
    margin-top: 0;
    margin-bottom: var(--gap-md);
  }
`;

// Container for the heart and bottle icons
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-md);
  margin-top: var(--gap-md);
  margin-bottom: var(--gap-md);

  @media only screen and (max-width: 767px) {
    grid-area: icons;
    justify-content: center;
    margin-top: var(--gap-md);
    margin-bottom: var(--gap-md);
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

// Styling for the heart icon
const HeartIcon = styled(FaHeart)`
  cursor: pointer;
  color: ${(props) => (props.isFilled ? 'var(--color-purple)' : 'var(--color-gray)')};
  font-size: 2.4rem;

  @media only screen and (max-width: 767px) {
    margin-right: 0.5rem; // Add a margin to space out the icons
    margin-left: 0.5rem; // Add a margin to space out the icons
  }
`;

// Styling for the bottle icon
const BottleIcon = styled(GiBrandyBottle)`
  cursor: pointer;
  color: ${(props) => (props.isFilled ? 'var(--color-purple)' : 'var(--color-gray)')};
  font-size: 2.4rem;

  @media only screen and (max-width: 767px) {
    margin-right: 0.5rem; // Add a margin to space out the icons
  }
`;

// Container for the text information about the oil
const OilText = styled.div`
  margin-left: var(--gap-md);

  @media only screen and (max-width: 767px) {
    margin-top: var(--gap-md);
    margin-bottom: var(--gap-md);
    grid-area: description;
  }
`;

// Styling for the title of the oil
const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: var(--gap-lg);

  @media only screen and (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

// Styling for subtitles
const Subtitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: var(--gap-xs);

  @media only screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

// Styling for information paragraphs
const Information = styled.p`
  font-size: 1.6rem;
  margin-bottom: var(--gap-md);

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

// Component for the heart and bottle icons
const Icons = ({
  isHeartFilled,
  setIsHeartFilled,
  isBottleFilled,
  setIsBottleFilled,
  handleFavoriteToggle,
  handleAromathequeToggle,
}) => {
  const [heartTooltipOpen, setHeartTooltipOpen] = useState(false);
  const [bottleTooltipOpen, setBottleTooltipOpen] = useState(false);

  // Function to render the text for the heart tooltip
  const renderHeartTooltipText = () => {
    return isHeartFilled ? 'Retirer de mes favoris' : 'Ajouter à mes favoris';
  };

  // Function to render the text for the bottle tooltip
  const renderBottleTooltipText = () => {
    return isBottleFilled ? 'Retirer de mon Aromathèque' : 'Ajouter à mon Aromathèque';
  };

  // Toggle the filled state of the heart icon when it's clicked
  const handleHeartClick = () => {
    handleFavoriteToggle();
    setIsHeartFilled(!isHeartFilled);
  };

  // Toggle the filled state of the bottle icon when it's clicked
  const handleBottleClick = () => {
    handleAromathequeToggle();
    setIsBottleFilled(!isBottleFilled);
  };

  return (
    <IconContainer>
      <HeartIcon
        isFilled={isHeartFilled}
        onClick={handleHeartClick}
        onMouseEnter={() => setHeartTooltipOpen(true)}
        onMouseLeave={() => setHeartTooltipOpen(false)}
      />
      <OilDetailsTooltip isOpen={heartTooltipOpen} target='heart-icon'>
        {renderHeartTooltipText()}
      </OilDetailsTooltip>
      <BottleIcon
        isFilled={isBottleFilled}
        onClick={handleBottleClick}
        onMouseEnter={() => setBottleTooltipOpen(true)}
        onMouseLeave={() => setBottleTooltipOpen(false)}
      />
      <OilDetailsTooltip isOpen={bottleTooltipOpen} target='bottle-icon'>
        {renderBottleTooltipText()}
      </OilDetailsTooltip>
    </IconContainer>
  );
};

const OilDetailsContainer = () => {
  const [oil, setOil] = useState(null);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isBottleFilled, setIsBottleFilled] = useState(false);
  const [userId, setUserId] = useState(null);
  const { id } = useParams();

  // UseEffect hook for fetching oil data and checking if it's in favorites or aromatheque in the local storage
  useEffect(() => {
    const fetchOil = async () => {
      try {
        const response = await axiosInstance.get(`/essential/${id}`);
        setOil(response.data);

        if (response.data.user_id) {
          setUserId(response.data.user_id);
        } else {
          const storedUserId = localStorage.getItem('userId');
          if (storedUserId) {
            setUserId(storedUserId);
          }
        }

        // Check if the oil is in the favorites in the local storage
        const isFavorite = localStorage.getItem(`oil_${id}_favorite`);
        if (isFavorite) {
          setIsHeartFilled(true);
        }

        // Check if the oil is in the aromatheque in the local storage
        const isAromatheque = localStorage.getItem(`oil_${id}_aromatheque`);
        if (isAromatheque) {
          setIsBottleFilled(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOil();
  }, [id]);

  console.log("userId>>>>>>", userId)
  console.log('ID>>>>>>>>>>>>>>>>>>> ', id);


  // Handle favorite toggle function
  const handleFavoriteToggle = async () => {
    try {

      const requestData = {
        user_id: userId, // Utilisez le userId du state
        oil_id: id, // Utilisez l'id de l'huile
      };
      // If the heart is filled, remove the oil from favorites
      if (isHeartFilled) {
          // Vue que j'envoi le userId pour delite donc on lui envoi les deux data userId(body) et oilId(params)
          await axiosInstance.delete(`/profile/favorites/${id}`, {
          data: requestData,
        });
        
        // Remove the oil id from the local storage
        localStorage.removeItem(`oil_${id}_favorite`);
        // Toggle the isHeartFilled state
        setIsHeartFilled(!isHeartFilled);
        // Display a toast message to indicate that the oil has been removed from favorites
        toast.success(`L'huile ${oil.name} a été retirée de vos favoris.`);
      } else {
        // Otherwise, add the oil to favorites
        await axiosInstance.post('/profile/favorites', {
          oil_id: id,
          user_id: userId, // Use the userId from the state
          favorite: true,
          aromatheque: null,
        });
        // Store the oil id as favorite in the local storage
        localStorage.setItem(`oil_${id}_favorite`, true);
        // Toggle the isHeartFilled state
        setIsHeartFilled(!isHeartFilled);
        // Display a toast message to indicate that the oil has been added to favorites
        toast.success(`L'huile ${oil.name} a été ajoutée à vos favoris.`);
      }
    } catch (error) {
      console.log(error);
      // Display a toast message to indicate that an error has occurred
      toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  useEffect(() => {
    const storedFavorite = localStorage.getItem(`oil_${id}_favorite`);
    if (storedFavorite) {
      setIsHeartFilled(true);
    }

    const storedAromatheque = localStorage.getItem(`oil_${id}_aromatheque`);
    if (storedAromatheque) {
      setIsBottleFilled(true);
    }
  }, [id]);



  // Handle aromathèque toggle function
  const handleAromathequeToggle = async () => {
    try {
        const requestData = {
          user_id: userId, // Utilisez le userId du state
          oil_id: id, // Utilisez l'id de l'huile
        };
        // If the heart is filled, remove the oil from aromatheque
        if (isBottleFilled) {
            // Vue que j'envoi le userId pour delite donc on lui envoi les deux data userId(body) et oilId(params)
            await axiosInstance.delete(`/profile/aromatheque/${id}`, {
            data: requestData,
          });
          
        localStorage.removeItem(`oil_${id}_aromatheque`);
        // Display a toast message to indicate that the oil has been removed from the aromatheque
        toast.success(`L'huile ${oil.name} a été retirée de votre Aromathèque.`);
      } else {

        await axiosInstance.post('/profile/aromatheque', {
          oil_id: id,
          user_id: userId, // Use the userId from the state
          favorite: null,
          aromatheque: true,
        });

        localStorage.setItem(`oil_${id}_aromatheque`, true);
        // Display a toast message to indicate that the oil has been added to the aromatheque
        toast.success(`L'huile ${oil.name} a été ajoutée à votre Aromathèque.`);
      }
      setIsBottleFilled(!isBottleFilled);

    } catch (error) {
      console.log(error);
      // Display a toast message to indicate that an error has occurred
      toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <Container>
      {oil ? (
        <>
          <OilImageWrapper>
            <OilImage src={`/img/essentialOils/${oil.name}.png`} alt={oil.name} />
            {/* <OilImage src={oil.image_url} alt={oil.name} /> */}
            <Icons
              isHeartFilled={isHeartFilled}
              setIsHeartFilled={setIsHeartFilled}
              isBottleFilled={isBottleFilled}
              setIsBottleFilled={setIsBottleFilled}
              handleFavoriteToggle={handleFavoriteToggle}
              handleAromathequeToggle={handleAromathequeToggle}
            />
          </OilImageWrapper>
          <OilText>
            <Title>{oil.name}</Title>
            <Subtitle>Nom Botanique</Subtitle>
            <Information>{oil.botanic_name}</Information>
            <div>
              <Subtitle>Description</Subtitle>
              <Information>{oil.description}</Information>
            </div>
            <div>
              <Subtitle>Extraction</Subtitle>
              <Information>{oil.extraction}</Information>
            </div>
            <div>
              <Subtitle>Molécule</Subtitle>
              <Information>{oil.molecule}</Information>
            </div>
            <div>
              <Subtitle>Famille de plantes</Subtitle>
              <Information>{oil.plant_family}</Information>
            </div>
            <div>
              <Subtitle>Parfum</Subtitle>
              <Information>{oil.scent}</Information>
            </div>
          </OilText>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default OilDetailsContainer;
