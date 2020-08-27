import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/typicons/ShoppingCart';

const CartContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 15px;
  z-index: 100;
  padding: 5px;
  background: ${(props) => props.theme.color.middlePink};
  box-shadow: 0px 0px 5px ${(props) => props.theme.color.shadowPink};
`;

const Cart = styled(ShoppingCart)`
  color: #fff;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 10px;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.size.mmd};
`;

const OuterContainer = styled.div`
  display: flex;
  overflow: auto;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

export { HeaderContainer, Container, Header, OuterContainer, Cart, CartContainer };
