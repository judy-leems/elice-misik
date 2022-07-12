import React from 'react';

//svg안에 mask는 도대체 어디에 쓰는거여
//storke 색상, 두께는 뺴도 될 것 같음? (변화없음)

export default function DiningBar({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 22'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_25_1383)'>
        <path
          d='M9.76219 7.38003V1.86838H10.1359C10.6496 1.86838 11.1167 1.448 11.1167 0.934212C11.1167 0.420426 10.6964 0 10.1826 0H2.10191C1.58812 0 1.16774 0.420382 1.16774 0.934168C1.16774 1.44795 1.58812 1.86838 2.10191 1.86838H2.75582V7.1465C0.934168 9.01488 0 11.1635 0 13.4055V19.9448C0 21.1125 1.0743 22 2.42889 22H9.80892C11.2102 22 12.2378 21.1125 12.3312 19.9448V13.4055C12.3312 11.3036 11.4437 9.20168 9.76219 7.38003ZM10.4628 19.9448C10.4161 19.9915 10.2293 20.1783 9.8556 20.1783H2.47561C2.10195 20.1783 1.86838 19.9915 1.86838 19.9448V13.4055C1.86838 11.5371 2.70914 9.76219 4.34395 8.17407C4.5308 7.98722 4.6242 7.75369 4.6242 7.52015V1.86838H7.89386V7.56688C7.84713 7.84713 7.94058 8.12739 8.12739 8.36092C9.66879 9.90232 10.4628 11.6305 10.4628 13.4055V19.9448Z'
          fill={fill}
        />
        <path
          d='M21.0657 4.01697H13.5455C13.0317 4.01697 12.6113 4.43735 12.6113 4.95114V9.43521C12.6113 11.6773 14.1995 13.5923 16.348 14.0127V18.5435H15.554C15.0402 18.5435 14.6198 18.9639 14.6198 19.4777C14.6198 19.9914 15.0402 20.4118 15.554 20.4118H18.9638C19.4776 20.4118 19.898 19.9914 19.898 19.4777C19.898 18.9639 19.4776 18.5435 18.9638 18.5435H18.2164V14.0127C20.3651 13.5924 21.9531 11.6773 21.9999 9.43526V4.95118C21.9999 4.43735 21.5795 4.01697 21.0657 4.01697ZM20.1315 9.43526C20.1315 11.0234 18.8703 12.2845 17.2822 12.2845C15.6941 12.2845 14.4329 11.0234 14.4329 9.43526V5.88535H20.1314V9.43526H20.1315Z'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_25_1383'>
          <rect width='22' height='22' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

DiningBar.defaultProps = {
  width: '50px',
  height: '50px',
  fill: '#A6A8A3',
};
