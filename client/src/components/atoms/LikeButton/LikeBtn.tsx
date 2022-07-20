import React, { useEffect, useState } from 'react';
import Heart from '../../../assets/svg/Heart';
import * as API from '../../../api/api';
import * as UI from './style';

const LikeBtn = ({ regNumber, email, isWished, position }: any) => {
  const [liked, setLiked] = useState(false);
  const [likedColor, setLikedColor] = useState('#A6A8A3');
  const postData = { email, REGNumber: regNumber };

  useEffect(() => {
    if (isWished) {
      setLiked(true);
      setLikedColor('#FB5E64');
    }
  }, [isWished, liked]);

  function handleClick() {
    liked === false ? setLiked(true) : setLiked(false);
    if (liked) {
      API.delete('/api/wishes', '', postData).then((res) => res);
      setLikedColor('#A6A8A3');
    } else {
      API.post('/api/wishes', '', postData).then((res) => res);
      setLikedColor('#FB5E64');
    }
  }

  return (
    <UI.ButtonWrapper position={position}>
      <button
        onClick={() => {
          if (localStorage.getItem('token')) {
            handleClick();
          }
        }}
      >
        <Heart width={23.69} height={22} fill={likedColor} />
      </button>
    </UI.ButtonWrapper>
  );
};

export default LikeBtn;
