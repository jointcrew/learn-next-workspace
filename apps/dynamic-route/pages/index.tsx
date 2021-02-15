import React from 'react';

import Link from 'next/link';

export function Index() {
  return (
    <>
      <h1>Dynamic Routes</h1>
      <h2>Basic</h2>
      <ul>
        <li>
          <Link href={`/post/1`}>
            <a>/post/1</a>
          </Link>
        </li>
        <li>
          <Link href={`/post/abc`}>
            <a>/post/abc</a>
          </Link>
        </li>
        <li>
          <Link href={`/post/abc?foo=bar`}>
            <a>/post/abc?foo=bar</a>
          </Link>
        </li>
        <li>
          <Link href={`/post/abc?pid=123 `}>
            <a>/post/abc?pid=123 </a>
          </Link>
        </li>
        <li>
          <Link href={`/post/abc/a-comment`}>
            <a>/post/abc/a-comment</a>
          </Link>
        </li>
      </ul>
      <h2>Catch all routes</h2>
      <ul>
        <li>
          <Link href={`/post2/a/b/c`}>
            <a>/post2/a/b/c</a>
          </Link>
        </li>
      </ul>
      <h2>Optional catch all routes</h2>
      <ul>
        <li>
          <Link href={`/post3`}>
            <a>/post3 (empty object)</a>
          </Link>
        </li>
        <li>
          <Link href={`/post3/a`}>
            <a>/post3/a (single-element array)</a>
          </Link>
        </li>
        <li>
          <Link href={`/post3/a/b`}>
            <a>/post3/a/b (multi-element array)</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Index;
