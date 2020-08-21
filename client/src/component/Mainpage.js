import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ScrollTab from 'component/share/EventScrollTab';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import Recommend from 'component/mainpage/Recommend';
import MapProductList from 'component/mainpage/MapProductList';
import { CategoryProvider, CategoryContext } from 'context/CategoryContext';
import { EventScrollProvider } from 'context/EventScrollContext';
import { RecommendContextProvider } from 'context/RecommendContext';
import { FetchingContext } from 'context/FetchingContext';

const Article = styled.article``;

const Section = styled.section`
  padding: 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

const RecommendSection = styled(Section)``;

const AdvertiseSection = styled(Section)``;

const ProductSection = styled(Section)``;

function Mainpage() {
  const [fetching, setFetching] = useContext(FetchingContext);
  const [end, setEnd] = useState(2);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다

      if (end < 10) {
        setFetching(true);
        setEnd(end + 2);
      }
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener('scroll', handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener('scroll', handleScroll);
    };
  }, [end]);

  return (
    <>
      {/* 헤더 */}
      <Header hasSearchBar />
      {/* 배너 */}
      <Banner />
      {/* 카테고리 */}
      <CategoryProvider>
        <Category />
      </CategoryProvider>
      <Article>
        {/* 이벤트 스크롤 탭 */}
        <EventScrollProvider>
          <ScrollTab />
        </EventScrollProvider>
        {/* 반짝할인 */}
        <RecommendContextProvider>
          <RecommendSection>
            <Recommend />
          </RecommendSection>
        </RecommendContextProvider>
        {/* 제품 영역 */}
        <CategoryProvider>
          <ProductSection>
            <MapProductList end={end} />
          </ProductSection>
        </CategoryProvider>
        {/* 광고영역 */}
        <AdvertiseSection>광고</AdvertiseSection>
      </Article>
    </>
  );
}

export default Mainpage;
