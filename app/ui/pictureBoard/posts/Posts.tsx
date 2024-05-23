'use client';

import { useState } from 'react';
import style from './posts.module.scss';
import axios from 'axios';
import { Button } from '../../button';

export default function Posts() {
  const [showPosts, setShowPosts] = useState<boolean>(false);
  const [posts, setPosts] = useState(null);

  const handleClick = async () => {
    try {
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const coments = await axios.get(
        'https://jsonplaceholder.typicode.com/comments',
      );
      const albums = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      // const postsPromises = [
      //   axios.get('https://jsonplaceholder.typicode.com/posts'),
      //   axios.get('https://jsonplaceholder.typicode.com/comments'),
      //   axios.get('https://jsonplaceholder.typicode.com/albums'),
      //   axios.get('https://jsonplaceholder.typicode.com/todos'),
      // ];

      // const result = await Promise.all(postsPromises);
    } catch (error) {
      console.log('Axios error', error);
    }
    setShowPosts(true);
  };

  return (
    <div className={style.container}>
      <Button onClick={handleClick}>Load Posts</Button>
      {/* {showPosts && <div className={style.postsWrap}></div>} */}
    </div>
  );
}
