import React from 'react';
import './PictureCards.css';
import { fetchImgUrl, fetchSlowImgUrl } from '../lib/utils';
import { PictureCard } from './PictureCard';

const headerStyle = {
  fontSize: '26px',
};

const PictureCards: React.FC = async () => {
  const fetchedImgUrl = await fetchImgUrl();
  const fetchedSlowImgUrl = await fetchSlowImgUrl();

  return (
    <div className="PictureCards__container">
      <h2 style={headerStyle}>Images:</h2>
      {fetchedImgUrl.map((img, i) => (
        <PictureCard
          key={i}
          src={img}
          title="fast img"
          description="gie nvre oerb"
        />
      ))}
      <h2 style={headerStyle}>Slow Image:</h2>
      {fetchedSlowImgUrl.map((img, i) => (
        <PictureCard
          key={i}
          src={img}
          title="slow img"
          description="sfrereger nrtnytie htrsaeeab ragntts"
        />
      ))}
    </div>
  );
};

export default PictureCards;
