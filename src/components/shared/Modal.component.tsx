import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}
type DialogHandle = HTMLDialogElement & {
  openModal: () => void;
};

const Modal = forwardRef<DialogHandle, ModalProps>(function Modal(
  { children },
  ref
) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(
    ref,
    () => {
      const element = dialog.current!;
      return {
        openModal() {
          element.showModal();
        },
        ...element,
      };
    },
    []
  );

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
