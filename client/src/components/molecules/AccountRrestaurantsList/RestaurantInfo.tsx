import styled from 'styled-components';
import {MapViewButton} from '../../atoms/MapViewButton/index';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { formatDiagnosticsWithColorAndContext } from 'typescript';

const RestaurantInfo = () => {
    const [address, setAddress] = useState<string>("주소입니다");
    const [postalCode, setPostalCode] = useState<number>(0);
    const [detailAddress, setDetailAddress] = useState<string>("상세주소입니다");
    const [phoneNumber, setPhoneNumber] = useState<number>(0);
    const [category, setCategory] = useState<string>("카테고리");
    const [averagePrice, setAveragePrice] = useState<number>(0);

    let menu: string[] = []

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];

            axios({
                url: `/api/restaurants/${REGNumber}`,
                method: 'GET'
            }).then((res) => {
                console.log(res.data)
                setAddress(current => res.data.address.address1)
                setPostalCode(current => res.data.address.postalcode)
                setDetailAddress(current => res.data.address.address2)
                setPhoneNumber(current => res.data.phoneNumber)
                setCategory(current => res.data.category)
            })
            axios({
                url: `/api/menus/${REGNumber}`,
                method: 'GET'
            }).then((res) => {
                const datas = res.data
                console.log(datas)
                datas.map((data:string) => {
                    menu.push(data)
                })
            })
        }, []
    )

    console.log(menu)
    
    return (
      <StyledRestaurantInfo>
        <StyledInfo>
            <StyledInfoTitle>주소</StyledInfoTitle>
            <div>
                <StyledInfoDescription>{address}</StyledInfoDescription>
                <StyledInfoCaption>({postalCode}) {detailAddress}</StyledInfoCaption>
            </div>
            <MapViewButton style={{marginLeft: '30px'}}>지도로 보기</MapViewButton>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>전화번호</StyledInfoTitle>
            <StyledInfoDescription>{phoneNumber}</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>음식 종류</StyledInfoTitle>
            <StyledInfoDescription>{category}</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>가격대</StyledInfoTitle>
            <StyledInfoDescription>평균 {averagePrice}만 원대</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>메뉴</StyledInfoTitle>
            <div>
                <StyledInfoDescription>
                    <StyledInfoMenu>포터하우스 스테이크 (1000g)</StyledInfoMenu>
                    <StyledInfoPrice>253,000원</StyledInfoPrice>
                </StyledInfoDescription>
                <StyledInfoDescription>
                    <StyledInfoMenu>오늘의 생선</StyledInfoMenu>
                    <StyledInfoPrice>46,000원</StyledInfoPrice>
                </StyledInfoDescription>
                <StyledInfoDescription>
                    <StyledInfoMenu>독일식 포테이토</StyledInfoMenu>
                    <StyledInfoPrice>16,000원</StyledInfoPrice>
                </StyledInfoDescription>
            </div>
        </StyledInfo>
      </StyledRestaurantInfo>
    );
  };
  
  export default RestaurantInfo;


const StyledRestaurantInfo = styled.div`
border-top: 1px solid #E5E5E5;
border-bottom: 1px solid #E5E5E5;
margin: 20px 40px;
padding: 20px 0;
`
const StyledInfo = styled.div`
display: flex;
align-items: flex-start;
padding-bottom: 14px;

&:last-child {
    padding-bottom: 0;
}
`
const StyledInfoTitle = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font3};
    width: 125px;
`
const StyledInfoDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font1};
    display: flex;
`
const StyledInfoCaption = styled.div`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font3};
    padding-top: 5px;
`
const StyledInfoPrice = styled.div`
    text-align: right;
    width: 100px;
`
const StyledInfoMenu = styled.div`
    width: 180px;
    padding-bottom: 5px;
`