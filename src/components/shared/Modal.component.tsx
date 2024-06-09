import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button.component";

interface ModalProps {
  children: ReactNode;
  buttonLabel: string;
}
type DialogHandle = HTMLDialogElement & {
  openModal: () => void;
};

const Modal = forwardRef<DialogHandle, ModalProps>(function Modal(
  { children, buttonLabel },

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
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded shadow-md ">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonLabel}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
