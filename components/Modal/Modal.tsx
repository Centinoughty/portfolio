import { ReactNode, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  return (
    <dialog ref={dialog} onClose={onClose} open={open}>
      {open && children}
    </dialog>
  );
}
