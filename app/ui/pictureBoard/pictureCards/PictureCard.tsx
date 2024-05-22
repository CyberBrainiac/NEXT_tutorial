import Image from 'next/image';

interface IPictureCard {
  title: string;
  description: string;
  src: string;
}

export function PictureCard({ src, title, description }: IPictureCard) {
  return (
    <div className="picture-card">
      <Image width={300} height={200} src={src} alt="this is random picture" />
      <div className="picture-card__content">
        <h3 className="picture-card__title">{title}</h3>
        <p className="picture-card__description">{description}</p>
      </div>
    </div>
  );
}
