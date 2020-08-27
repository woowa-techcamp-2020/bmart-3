import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BigTitle = styled.div`
  font-size: ${(props) => props.theme.size.md};
`;

const EachCartItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = (props) => {
  return <input type="checkbox" {...props} />;
};

const StyledInput = styled(Input)`
  display: block;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 5px;

  & + label:before {
    border: 0.1em solid mediumseagreen;
    border-radius: 0.2em;
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    vertical-align: bottom;
    color: transparent;
    transition: 0.2s;
    font-size: 0.8em;
    padding: 0.1em;
  }

  & + label:active:before {
    transform: scale(0);
    border: 1px solid mediumseagreen;
  }

  &:checked + label:before {
    background-color: MediumSeaGreen;
    color: #fff;
  }
`;

const Label = styled.label`
  display: block;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <>
      <Header>
        <HeaderRow />
        <HeaderRow />
      </Header>
      <Section>
        <EachCartItem>
          <BigTitle></BigTitle>
          <StyledInput name="authorization" value="쓰기권한" />
          <Label htmlFor="authorization" />
        </EachCartItem>
      </Section>
    </>
  );
};

export default Cart;
