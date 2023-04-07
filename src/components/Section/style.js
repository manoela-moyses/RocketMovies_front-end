import styled from "styled-components";

export const Container = styled.section`
margin-bottom: 4rem;

> div.title {
  display: flex;
  align-items: center;
  gap: 1.8rem;

  margin-bottom: 2.4rem;
  margin-top: 2.4rem;

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    font-weight: 500;
  }
}

> div.info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 4rem;
  
  .user {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    img {
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
    }
    
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
}

.date {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

svg {
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};
}

span {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
}
`;