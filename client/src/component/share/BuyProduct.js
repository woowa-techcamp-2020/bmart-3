import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Minus } from '@styled-icons/boxicons-regular/Minus';
import { addCommaToNumber } from 'component/share/util';
import { ToggleProductBuyContext } from 'context/ToggleProductBuyContext';

const StyledPlus = styled(Plus)`
  height: 14px;
  width: 15px;
`;
const StyledMinus = styled(Minus)`
  height: 14px;
  width: 15px;
  color: ${(props) => (props.isOne ? '#ddd' : 'black')};
`;

const showpane = keyframes`
    0% {
        transform: translateY(390px);
    }
    100% {
        transform: translateY(0);
    }
`;

const ModalContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: black;
`;
const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
`;
const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 210px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  animation: ${showpane} 0.5s cubic-bezier(0, 0, 0, 1);
`;
const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid ${(props) => props.theme.color.darkGray};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.size.smd};
`;

const Closebtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin: 10px 0;
  }
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text = styled.div`
  text-align: left;
`;
const Price = styled.div``;
const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  height: 30px;
  width: 50px;
`;

const AddBtn = styled.button`
  width: 95%;
  height: 35px;
  background: ${(props) => props.theme.color.middlePink};
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const TotalPrice = styled.div`
  color: #fff;
  position: absolute;
  bottom: 53px;
  right: 15px;
`;

const BuyProduct = ({ content }) => {
  const [amount, setAmount] = useState(1);
  const [selected, setSelected] = useContext(ToggleProductBuyContext);

  const toggleSelected = () => {
    selected[content.id] = !selected[content.id];
    setSelected(selected);
  };
  return (
    <ModalContainer>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <Header>
          <Title>{content.name}</Title>
          <Closebtn>닫기</Closebtn>
        </Header>
        <Section>
          <ContentBox>
            <Img src={content.img_url}></Img>
            <TextBox>
              <Text>{content.name}</Text>
              <Price>{`${addCommaToNumber(content.price)}원`}</Price>
            </TextBox>
            <AmountBox>
              <StyledMinus isOne={amount === 1 ? true : false} />
              {amount}
              <StyledPlus />
            </AmountBox>
          </ContentBox>
          <AddBtn>{amount}개 담기</AddBtn>
          <TotalPrice>{`${addCommaToNumber(amount * content.price)}원`}</TotalPrice>
        </Section>
      </ModalContent>
    </ModalContainer>
  );
};

export default BuyProduct;
