import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: 
"header"
"content";

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

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

> div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: default;
  }

  button {
    max-width: 20.7rem;
    height: 4.8rem;
    margin-top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
}
`;
