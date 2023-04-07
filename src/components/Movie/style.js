import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background: rgba(255, 133, 155, 0.05);

border: none;
border-radius: 1.6rem;

padding: 3.2rem;
margin-bottom: 2.4rem;

&:last-child {
  margin-bottom: 0;
}

> h1 {
  flex: 1;
  text-align: left;
  font-weight: bold;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
}

> div {
  gap: 0.6rem;

  svg {
    height: 1.2rem;
    width: 1.2rem;
  }
}

> p {
  font-family: 'Roboto', sans-serif;
  text-align: justify;
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

> footer {
  width: 100%;
  display: flex;
  margin-top: 1.6rem;
}
`;