import React from 'react';

export default function Avatar({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 10C29.825 10 33.75 13.925 33.75 18.75C33.75 23.575 29.825 27.5 25 27.5C20.175 27.5 16.25 23.575 16.25 18.75C16.25 13.925 20.175 10 25 10ZM25 45C19.925 45 13.925 42.95 9.65 37.8C13.875 34.5 19.2 32.5 25 32.5C30.8 32.5 36.125 34.5 40.35 37.8C36.075 42.95 30.075 45 25 45Z'
        fill={fill}
      />
    </svg>
  );
}

Avatar.defaultProps = {
  width: '50px',
  height: '50px',
  fill: '#64AD57',
};
