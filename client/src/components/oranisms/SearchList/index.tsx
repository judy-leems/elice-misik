import ShopListCard from '../../molecules/Card/SearchShopList';
import * as UI from './style';
import { dummy } from './MockData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeBtn from '../../atoms/LikeButton/LikeBtn';
import axios from 'axios';
import * as API from '../../../api/api';

const postData = {
  email: 'dcTest000',
  name: 'kdc',
  password: '93939393',
  nickName: 'adsfadsfcv',
  phoneNumber: '1292',
  role: 'OWNER',
};

const MainShopList = ({ inputValue, userEmail }: any) => {
  const [shop, setShop] = useState([
    {
      name: '',
      address1: '',
      category: '',
      image: '',
      REGNumber: '',
      wishers: 0,
    },
  ]);
  useEffect(() => {
    if (inputValue === '') {
      API.get('/api/restaurants').then((res) => {
        setShop(res.restaurants);
      });
    } else {
      API.get('/api/restaurants').then((res) => {
        const data = res.restaurants;
        const filtered = data.filter(
          (e: any) =>
            e.name.includes(inputValue) || e.category.includes(inputValue),
        );
        setShop(filtered);
      });
    }
  }, [inputValue]);

  return (
    <UI.Container>
      <UI.Title>추천 맛집 List!</UI.Title>
      <UI.SubTitle>알 수 없는 알고리즘에 의한 추천</UI.SubTitle>
      <UI.GridContainer>
        {shop.map((item, idx) => {
          return (
            <div
              key={`${item}-${idx}`}
              style={{ position: 'relative', width: 370 }}
            >
              <LikeBtn regNumber={item.REGNumber} email={userEmail} />
              <Link to={`/account/restaurants/${item.REGNumber}`}>
                <ShopListCard
                  title={item.name}
                  address={item.address1}
                  category={item.category}
                  likeCount={item.wishers}
                  reviewCount={10}
                  shopImg={item.image}
                  large={true}
                />
              </Link>
            </div>
          );
        })}
      </UI.GridContainer>
    </UI.Container>
  );
};

export default MainShopList;