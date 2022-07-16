import React from 'react';

export default function Setting({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 4.8C14.316 4.8 16.2 6.684 16.2 9C16.2 11.316 14.316 13.2 12 13.2C9.684 13.2 7.8 11.316 7.8 9C7.8 6.684 9.684 4.8 12 4.8ZM12 21.6C9.564 21.6 6.684 20.616 4.632 18.144C6.66 16.56 9.216 15.6 12 15.6C14.784 15.6 17.34 16.56 19.368 18.144C17.316 20.616 14.436 21.6 12 21.6Z'
        fill={fill}
      />
    </svg>
  );
}

Setting.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
