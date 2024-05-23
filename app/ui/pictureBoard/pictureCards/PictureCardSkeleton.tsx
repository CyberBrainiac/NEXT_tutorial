import Image from 'next/image';
import './PictureCards.css';

export function PictureCardSkeleton({ height = 200 }: { height?: number }) {
  const cardStyle = {
    height: `${height}px`,
  };

  return (
    <div className="picture-card" style={cardStyle}>
      <Image src={''} alt="this is random picture" />
      <div className="picture-card__content">
        <h3 className="picture-card__title">Title</h3>
        <p className="picture-card__description">Description</p>
      </div>
    </div>
  );
}

export function PictureCardsSkeleton() {
  return (
    <>
      <PictureCardSkeleton />
      <PictureCardSkeleton />
      <PictureCardSkeleton />
      <PictureCardSkeleton />
    </>
  );
}
