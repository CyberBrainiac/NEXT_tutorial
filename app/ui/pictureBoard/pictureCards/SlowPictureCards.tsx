import { fetchSlowImgUrl } from '../lib/utils';
import { PictureCard } from './PictureCard';
import './PictureCards.css';

export default async function SlowPictureCard() {
  const fetchedSlowImgUrl = await fetchSlowImgUrl();
  return (
    <div className="PictureCards__container">
      {fetchedSlowImgUrl.map((img, i) => (
        <PictureCard
          key={i}
          src={img}
          title="slow img"
          description="sfrereger nrtnytie htrsaeeab ragntts"
          width={600}
          height={400}
        />
      ))}
    </div>
  );
}
