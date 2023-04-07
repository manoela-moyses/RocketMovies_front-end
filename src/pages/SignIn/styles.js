import styled from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`;

export const Form = styled.form`
padding: 0 13.6rem;

display: flex;
flex-direction: column;
justify-content: center;

text-align: center;

> h1 {
  font-size: 4.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PINK};
  cursor: default;
}

> p {
  font-size: 1.4rem;
  margin-bottom: 4.8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  cursor: default;
}

> h2 {
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 4.8rem;
  cursor: default;

  display: flex;
  align-items: flex-start;
}

> div {
  margin-bottom: 0.8rem;
}

button {
  margin-top: 1.6rem;
  margin-bottom: 4.2rem;
}

.simpleButton {
  margin-top: 0;
  margin: 0 auto;
}
`;

export const Background = styled.div`
flex: 1;
background: linear-gradient(rgba(28,27,30, 0.7)0%, rgba(28,27,30, 0.7)100%), url(${backgroundImg}) no-repeat center center;
background-size: cover;
`;