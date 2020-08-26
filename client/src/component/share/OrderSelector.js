import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 30%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin: 10px;
  & select {
    margin-right: 25px;
  }
`;

const optionValueList = ['id/ASC', 'price/ASC', 'price/DESC', 'saled_count/DESC'];
const optionLabelList = ['기본 정렬', '낮은 가격순', '높은 가격순', '판매 인기순'];

function OrderSelector(props) {
  const [selectedOption, setSelectedOption] = useState(props.selected);
  const changeOrder = (e) => {
    e.preventDefault();
    props.changeOrder(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <Wrapper>
      <StyledSelect value={selectedOption} onChange={changeOrder}>
        {optionValueList.map((optionValue, index) =>
          optionValue === selectedOption ? (
            <option selected value={optionValue}>
              {optionLabelList[index]}
            </option>
          ) : (
            <option value={optionValue}>{optionLabelList[index]}</option>
          )
        )}
      </StyledSelect>
    </Wrapper>
  );
}

export default OrderSelector;
