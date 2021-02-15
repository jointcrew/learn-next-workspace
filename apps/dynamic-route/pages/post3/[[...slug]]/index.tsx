import React from 'react';
import { useRouter } from 'next/router';

const Post3 = () => {
  const router = useRouter();
  return <div>{JSON.stringify(router.query)}</div>;
};

export default Post3;
