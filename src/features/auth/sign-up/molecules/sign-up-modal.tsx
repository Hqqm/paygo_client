import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { Modal } from "@ui/molecules";

export const SignUpModal = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const isRegisteredSuccess = useSelector(
    (state: AppState) => state.signUp.fetchingState === "success"
  );

  return (
    <>
      {isRegisteredSuccess && (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
          регистрация прошла успешна
        </Modal>
      )}
    </>
  );
};
