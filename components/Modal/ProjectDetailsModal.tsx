import Button from "@/util/Button";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

interface ProjectDetailsModalProps {
  open: boolean;
  project: {
    id: number;
    image: string;
    name: string;
    description: string;
    url: string;
    gitHub: string;
  };
  onClose: () => void;
}

export default function ProjectDetailsModal({
  open,
  project,
  onClose,
}: ProjectDetailsModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  const buttonClasses = "px-2 py-1 rounded-lg border-2 border-black";

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className="p-2 w-[700px] h-[500px] rounded-lg bg-[#ede7de]"
    >
      {open ? (
        <div className="h-full px-2 py-1 font-mont flex flex-col gap-4 justify-between bg-opacity-50">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between py-2">
              <div></div>
              <h1 className="text-center text-2xl">{project.name}</h1>
              <button onClick={onClose}><FiX className="text-red-500 font-light duration-200 hover:bg-red-500 hover:text-[#ede7de]" size={30} /></button>
            </div>
            <p className="px-2 text-xl">{project.description}</p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              onNewPage
              download={false}
              url={project.url}
              label="OPEN"
              className={buttonClasses + ' text-stone-200 bg-yellow-800'}
            />
            <Button
              onNewPage
              download={false}
              url={project.gitHub}
              label="GITHUB"
              className={buttonClasses + ' bg-yellow-500'}
            />
          </div>
        </div>
      ) : null}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
}
