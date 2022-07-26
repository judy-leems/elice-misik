import React, { useEffect } from 'react';
import * as UI from './style';
import Img from '../../../../../components/atoms/Img';
import * as Icon from '../../../../../assets/svg';
import Paging from '../../../../../components/atoms/Pagination/Pagination';
import * as API from '../../../../../api/api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MainCardWithoutReviewProps {
  title: String;
  address: String;
  regNumber: any;
  foodType: string;
  wishes: any;
  setChange: any;
  change: boolean;
}

const AccountLikesUser = ({
  title,
  address,
  regNumber,
  foodType,
  wishes,
  setChange,
  change,
}: MainCardWithoutReviewProps) => {
  const navigate = useNavigate();
  const [shop, setShop] = useState<any>([]);
  const [image, setImage] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [postPerPage] = useState(8);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    await regNumber.forEach((e: any, idx: any) => {
      API.get(`/api/restaurants/${e}`).then((res) => {
        setShop((prev: any) => {
          return [...prev, res];
        });
      });
    });
    await regNumber.forEach((e: any, idx: any) => {
      API.get(`/api/restaurantImages/${e}`).then((res) => {
        if (res[0] === undefined) {
          return;
        } else {
          setImage((prev: any) => {
            return [...prev, res[0]];
          });
        }
      });
    });
    setIsLoading(false);
  };

  for (let i = 0; i < shop.length; i++) {
    for (let j = 0; j < image.length; j++) {
      if (shop[i].REGNumber === image[j].REGNumber) {
        Object.assign(shop[i], image[j]);
      } else {
        continue;
      }
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setShop([]);
    setImage([]);
    setCurrentPosts([]);
    getData();
    setIsLoading(false);
  }, [regNumber]);

  useEffect(() => {
    setCount(shop.length);
    setIndexOfLastPost(page * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(shop.slice(indexOfFirstPost, indexOfLastPost));
  }, [page, shop, indexOfFirstPost, indexOfLastPost, postPerPage]);

  return (
    <UI.Container>
      <UI.PageTitle>찜 목록</UI.PageTitle>
      <div style={{ display: 'flex' }}>
        <UI.DeleteAll
          onClick={async () => {
            setIsLoading(true);
            wishes.forEach((e: { REGNumber: string; email: string }) => {
              const REGNumber = e.REGNumber;
              const email = e.email;
              const data = { REGNumber, email };
              API.delete('/api/wishes', '', data).then((res) => {
                setShop([]);
                setImage([]);
                setCurrentPosts([]);
                setChange((prev: any) => !prev);
              });
            });
            alert('전체삭제완료');
            setIsLoading(false);
          }}
        >
          전체삭제
        </UI.DeleteAll>
      </div>

      {isLoading || !regNumber ? (
        <div
          style={{
            fontSize: '30px',
            textAlign: 'center',
            marginTop: '350px',
          }}
        >
          Loading.....
          <span style={{ marginLeft: '15px' }}>:(</span>
        </div>
      ) : shop.length > 0 ? (
        <>
          <UI.GridContainer>
            {currentPosts.map((item: any, idx: any) => {
              return (
                <div
                  style={{ position: 'relative' }}
                  key={`${idx}-${item.REGNumber}`}
                >
                  <UI.CardContainer
                    onClick={() => {
                      navigate(`/restaurants/view/${item.REGNumber}`);
                    }}
                  >
                    <UI.ImgWrapper>
                      <Img src={item.image}></Img>
                    </UI.ImgWrapper>
                    <UI.InfoWrapper>
                      <UI.Title>{item.name}</UI.Title>
                      <UI.SubTitle>
                        {item.address1} - {item.category}
                      </UI.SubTitle>
                    </UI.InfoWrapper>
                  </UI.CardContainer>
                  <button
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '12px',
                      borderRadius: '20px',
                      width: '50px',
                      height: '30px',
                      backgroundColor: '#64AD57',
                      color: 'white',
                      zIndex: '10,',
                    }}
                    onClick={async () => {
                      const filtered = wishes.filter(
                        (e: { REGNumber: any }) =>
                          e.REGNumber === item.REGNumber,
                      );
                      setIsLoading(true);
                      const REGNumber = filtered[0].REGNumber;
                      const email = filtered[0].email;
                      const data = { REGNumber, email };
                      await API.delete('/api/wishes', '', data).then((res) => {
                        alert('삭제 완료');
                        setShop([]);
                        setImage([]);
                        setCurrentPosts([]);
                        setChange((prev: any) => !prev);
                      });
                      setIsLoading(false);
                    }}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
          </UI.GridContainer>
          <Paging
            page={page}
            perPage={postPerPage}
            total={count}
            setPage={setPage}
          />
        </>
      ) : (
        <div
          style={{
            fontSize: '30px',
            textAlign: 'center',
            marginTop: '350px',
          }}
        >
          찜한 레스토랑이 없습니다
          <span style={{ marginLeft: '15px' }}>:(</span>
        </div>
      )}
    </UI.Container>
  );
};

AccountLikesUser.defaultProps = {
  title: '오츠에스프레소',
  address: '판교',
  foodType: '이탈리안음식',
};

export default AccountLikesUser;
