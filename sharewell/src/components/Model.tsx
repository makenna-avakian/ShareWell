import React, {useEffect, useRef} from "react";
import useModalStore from "@/stores/useModalStore";

interface ModalProps {
    title: 'Modal 1' | 'Modal 2' | 'Modal 3';
}

const Modal: React.FC<ModalProps> = ({ title }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal1, closeModal2, closeModal3 } = useModalStore();

  const handleClose = () => {
    if (title === 'Modal 1') closeModal1();
    if (title === 'Modal 2') closeModal2();
    if (title === 'Modal 3') closeModal3();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl mb-4">{title}</h2>
      </div>
    </div>
  );
};

export default Modal;