import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.GRAY_400};

border: ${({ theme, isNew }) => isNew ? `0.1rem dashed ${theme.COLORS.GRAY_400}` : "none"};

border-radius: 1rem;
padding-right: 1.6rem;

> button {
  border: none;
  background: none;
}

.button-delete {
  color: ${({ theme }) => theme.COLORS.PINK};
}

.button-add {
  color: ${({ theme }) => theme.COLORS.PINK};
}

> input {
  font-family: 'Roboto', sans-serif;

  height: 5.6rem;
  width: 100%;

  padding: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
}
`;