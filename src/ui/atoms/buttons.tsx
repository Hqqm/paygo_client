import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: inherit;

  &:hover {
    background: #866ec7;
    color: #fff;
  }
`;
