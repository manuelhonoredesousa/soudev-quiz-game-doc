import React, { PropsWithChildren, useEffect, useRef} from "react";
import "./style.css";
import { Heading } from "../Heading";

interface Entries extends PropsWithChildren {
  dialogState: boolean;
  setDialogStateFalse?: () => void;
  title: string;
}

const Modal: React.FunctionComponent<Entries> = ({ children, dialogState = false, title, setDialogStateFalse = () => {}}) => {
  const modalRef = useRef<HTMLDialogElement>(null!);

  function handleKeyEscape(e: any) /**have no idea what type to set */ {
    if (e.code === "Escape" && dialogState == false) {
      setDialogStateFalse();
      // window.removeEventListener("keyup", handleKeyEscape);
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyEscape);
  }, []);

  useEffect(() => {
    if (dialogState == true) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [dialogState]);
  return (
    <dialog ref={modalRef} className="modal">
      <Heading text={title} />
      <hr className="mb-8" />
      {children}
    </dialog>
  );
};

export { Modal };
