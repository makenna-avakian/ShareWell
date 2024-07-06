import React from "react";

interface ModalProps {
    title: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl mb-4">{title}</h2>
        <button onClick={onClose} className="mt-4 p-2 bg-gray-200 rounded">Close</button>
      </div>
    </div>
    )
};

export default Modal;