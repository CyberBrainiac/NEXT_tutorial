import React from 'react';
import './PictureCards.css';
import { fetchImgUrl, fetchSlowImgUrl } from '../lib/utils';
import { PictureCard } from './PictureCard';

const PictureCards: React.FC = async () => {
  const fetchedImgUrl = await fetchImgUrl();

  return (
    <>
      {fetchedImgUrl.map((img, i) => (
        <PictureCard
          key={i}
          src={img}
          title="fast img"
          description="gie nvre oerb"
        />
      ))}
    </>
  );
};

export default PictureCards;
