import React, { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.JSX.Element;
}


function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(isOpen);
  const [visible, setVisible] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      requestAnimationFrame(() => { // Renders setMount(true)
        requestAnimationFrame(() => setVisible(true)); // Renders setVisible(true) as separate frame
      });
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (!visible && e.target === modalRef.current && e.propertyName === "opacity") {
      setMounted(false); // unmount after exit transition
    }
  };

  if (!mounted) return null;

  
  return (
    <div className={`${styles.backdrop} ${visible ? styles.backdropOpen : ""}`} onClick={onClose}>
      <div 
        ref={modalRef}
        className={`${styles.modal} ${visible ? styles.modalOpen : ""}`}
        onTransitionEnd={handleTransitionEnd}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal={"true"}
      >
        <div className={styles.closeContainer} >
          <button onClick={onClose} >X</button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;