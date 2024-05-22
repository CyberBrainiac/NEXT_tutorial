export async function fetchSlowImgUrl() {
  return new Promise<string[]>((resolve, reject) => {
    const url = ['https://source.unsplash.com/random/600x400'];
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}

export async function fetchImgUrl() {
  return new Promise<string[]>((resolve, reject) => {
    const url = [
      'https://source.unsplash.com/random/290x200',
      'https://source.unsplash.com/random/300x210',
      'https://source.unsplash.com/random/305x205',
    ];
    setTimeout(() => {
      resolve(url);
    }, 100);
  });
}
