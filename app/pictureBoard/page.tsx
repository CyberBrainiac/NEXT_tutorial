import { Suspense } from 'react';
import PictureCards from '../ui/pictureBoard/pictureCards/PictureCards';
import SlowPictureCard from '../ui/pictureBoard/pictureCards/SlowPictureCards';
import style from './page.module.scss';
import {
  PictureCardSkeleton,
  PictureCardsSkeleton,
} from '../ui/pictureBoard/pictureCards/PictureCardSkeleton';
import Posts from '../ui/pictureBoard/posts/Posts';

const headerStyle = {
  fontSize: '26px',
};

export default function PictureBoard() {
  return (
    <main>
      <h1>This is test for parallel request</h1>
      <Posts />
      <h2 style={headerStyle}>Images:</h2>
      <div className={style[`multi-card`]}>
        <Suspense fallback={<PictureCardsSkeleton />}>
          <PictureCards />
        </Suspense>
      </div>
      <Suspense fallback={<PictureCardSkeleton height={400} />}>
        <SlowPictureCard />
      </Suspense>
    </main>
  );
}
