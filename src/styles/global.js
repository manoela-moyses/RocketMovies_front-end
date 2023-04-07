import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  -webkit-font-smoothing: antialiased;

  *::-webkit-scrollbar {
    width: 0.8rem;
    height: 2rem;
    border-radius: 50%;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10rem;
  }      
}

body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  outline: none;

}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`;