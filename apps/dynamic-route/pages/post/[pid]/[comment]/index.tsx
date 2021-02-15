import React from 'react';
import { useRouter } from 'next/router';

const Comment = () => {
  const router = useRouter();
  return <div>{JSON.stringify(router.query)}</div>;
};

export default Comment;
