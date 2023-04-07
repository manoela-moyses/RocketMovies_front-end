import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: 
"header"
"content";

> main {
  grid-area: content;
  overflow-y: auto;
  padding: 4rem 0;
}
`;

export const Content = styled.div`
max-width: 111.3rem;
margin: 0 auto;

display: flex;
flex-direction: column;

> button:first-child {
  align-self: start;
}

> h1 {
  margin-top: 2.4rem;
  margin-bottom: 4rem;

  font-size: 3.6rem;
  font-weight: 500;

  cursor: default;
}

> div {
  display: flex;
  align-items: center;
  gap: 4rem;
}

> textarea {
  margin-top: 4rem;
}

> h2 {
  margin-top: 4rem;
  margin-bottom: 2.4rem;
  
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  cursor: default;
}

> div.markers {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: 0;
  border-radius: 0.8rem;
  
  padding: 1.6rem;
}

> div {
  .deleteMovie {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
}
`;