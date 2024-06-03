import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialog}
      className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg"
      onClose={onClose}
    >
      <div className="flex flex-col items-center text-center">
        {children}
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-[#037667] text-white rounded-md hover:bg-green-800 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </dialog>
  );
}
