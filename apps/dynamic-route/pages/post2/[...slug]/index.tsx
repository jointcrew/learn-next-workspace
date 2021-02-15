import React from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();
  const slug = router.query?.slug || [];
  return (
    <>
      <h1>Slug Page</h1>
      {JSON.stringify(slug)}
    </>
  );
};

export default Slug;
