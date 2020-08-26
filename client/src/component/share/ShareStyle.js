import styled from 'styled-components';

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

export { HeaderContainer, Container, Header, OuterContainer };
