import React, { useState } from 'react';
import styled from 'styled-components';
import { LightningFill } from '@styled-icons/bootstrap/LightningFill';
import salad from 'image/salad.png';
import egg from 'image/egg.png';
import mealKit from 'image/mealKit.png';
import milk from 'image/milk.png';
const RecommendWrapper = styled.div`
  width: 100%;
  min-height: 100px;
`;

const RecommendHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const RecommendTitle = styled.h1``;

const StyledLight = styled(LightningFill)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color.yello};
`;

const Emphasize = styled.span`
  color: ${(props) => props.theme.color.lightRed};
`;

const RecommendBtn = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.color.buttonGreen};
`;

const RecommenedContent = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FirstRowItem = styled.img`
  width: 22%;
  height: 80px;
  border: ${(props) => (props.isSelected ? '1px solid red' : 'none')};
  margin-bottom: 5px;
  padding: 1%;
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 1%;
  max-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CurrentItem = styled.img`
  width: 70%;
`;

const Recommend = () => {
  const [recommendList, setRecommendList] = useState([
    { id: 1, name: '과일﹒샐러드', src: salad },
    { id: 2, name: '정육﹒수산﹒계란', src: egg },
    { id: 3, name: '밀키트', src: mealKit },
    { id: 4, name: '우유﹒유제품', src: milk },
  ]);

  const [selected, setSelected] = useState(1);

  const updateImg = (id) => {
    setSelected(id);
  };

  return (
    <RecommendWrapper>
      <RecommendHeader>
        <RecommendTitle>
          지금 사면 <StyledLight />
          <Emphasize>번쩍할인</Emphasize>
        </RecommendTitle>
        <RecommendBtn>더보기</RecommendBtn>
      </RecommendHeader>
      <RecommenedContent>
        {recommendList.map((item, idx) => (
          <FirstRowItem
            key={`${item.name}+${idx}`}
            src={item.src}
            isSelected={selected === item.id ? true : false}
            onClick={() => updateImg(item.id)}
          ></FirstRowItem>
        ))}
        <ImgWrapper>
          <CurrentItem src={recommendList[selected - 1].src}></CurrentItem>
        </ImgWrapper>
      </RecommenedContent>
    </RecommendWrapper>
  );
};

export default Recommend;
