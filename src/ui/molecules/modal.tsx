import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Button } from "../atoms/buttons";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <ModalWrapper>
            <ModalContainer>{children}</ModalContainer>
            <Button onClick={() => setIsOpen(false)}>закрыть</Button>
          </ModalWrapper>,
          document.getElementById("modal") as HTMLDivElement
        )}
    </>
  );
};

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000b0;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
