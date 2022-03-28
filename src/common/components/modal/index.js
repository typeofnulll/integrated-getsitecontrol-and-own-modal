import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

export const useModal = (modalId) => {
  const body = document.querySelector("body");

  const [modal, setModal] = useState(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const modal = document.getElementById(modalId);
    setModal(modal);
  }, [modalId]);

  const onOpen = () => {
    modal.showModal();
    setOpened(true);
    body.style.overflow = "hidden";
  };
  const onClose = () => {
    modal.close();
    setOpened(false);
    body.style.overflow = "auto";
  };

  return { opened, onOpen, onClose };
};

const Modal = ({ className, modalId, opened = true, onClose, children }) => (
  <dialog
    className={cn(className, {
      [styles.modal]: children,
    })}
    id={modalId}
  >
    {opened && (
      <>
        {children}
        {onClose && (
          <img
            src="/icons/black-close-icon.svg"
            className={styles.close}
            alt="close-modal"
            onClick={onClose}
          />
        )}
      </>
    )}
  </dialog>
);

export default Modal;
