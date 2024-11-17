import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-gray-600 font-semibold"
        >
          X
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
