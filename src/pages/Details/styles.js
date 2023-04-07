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

> p {
  font-size: 1.6rem;
  text-align: justify;
  margin-bottom: 2rem;
}
`;