import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: inherit;
  transition: background-color 100ms, color 100ms, border-color 100ms;

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background: ${({ theme }) => theme.colors.grey};
    color: #000000;
  }

  &:hover {
    background: #866ec7;
    color: #fff;
  }
`;
