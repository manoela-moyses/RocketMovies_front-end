import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 1rem;

svg {
  color: ${({ theme }) => theme.COLORS.PINK};
  width: 2rem;
  height: 2rem;
}
`;