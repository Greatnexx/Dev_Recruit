import React, { useState } from 'react';
import Modal from '../Components/Modal'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (

    <>

<Link to="/" className="text-blue-700  mb-5 flex items-center  ">
       <BiArrowBack className='mr-2'/>
        Go back 
      </Link>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button 
        onClick={toggleModal} 
        className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <h2 className="text-xl font-bold mb-4">Hello from React</h2>
        <p className="text-gray-700">example of a modal.</p>
        <button 
          onClick={toggleModal} 
          className="bg-red-500 text-white py-1 px-4 mt-4 rounded-full hover:bg-red-600 transition"
        >
          Close Modal
        </button>
      </Modal>
    </div>
    </>
  );
};

export default ModalPage;
