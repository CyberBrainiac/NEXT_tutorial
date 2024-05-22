import PictureCards from '../ui/pictureBoard/pictureCards/PictureCards';

export default function PictureBoard() {
  return (
    <main>
      <h1>This is test for parallel request</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <PictureCards />
      </div>
    </main>
  );
}
