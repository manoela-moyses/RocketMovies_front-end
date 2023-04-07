import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
grid-area: header;

height: 11.6rem;
width: 100%;

border-bottom-width: 0.1rem;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

display: flex;
justify-content: space-between;

padding: 0 12.3rem;
`;

export const Brand = styled(Link)`
display: flex;
justify-content: center;
align-items: center;

> h1 {
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PINK};
  cursor: default;
}
`;

export const Search = styled.div`
display: flex;
align-items: center;
width: 63rem;
`;

export const Profile = styled(Link)`
display: flex;
align-items: center;

> img {
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  cursor: pointer;
}

> div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 0.9rem;
  line-height: 1.8rem;

  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: default;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    cursor: pointer;
  }
}
`;