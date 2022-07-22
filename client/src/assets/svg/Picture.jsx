import React from 'react';

export default function Picture({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.2105 6.31579V10.0926C20.2105 10.0926 17.6968 10.1053 17.6842 10.0926V6.31579H13.8947C13.8947 6.31579 13.9074 3.80211 13.8947 3.78947H17.6842V0H20.2105V3.78947H24V6.31579H20.2105ZM16.4211 11.3684V7.57895H12.6316V3.78947H2.52632C1.13684 3.78947 0 4.92632 0 6.31579V21.4737C0 22.8632 1.13684 24 2.52632 24H17.6842C19.0737 24 20.2105 22.8632 20.2105 21.4737V11.3684H16.4211ZM2.52632 21.4737L6.31579 16.4211L8.8421 20.2105L12.6316 15.1579L17.6842 21.4737H2.52632Z'
        fill={fill}
      />
    </svg>
  );
}

Picture.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
