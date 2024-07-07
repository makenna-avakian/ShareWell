'use client'

import React from 'react';
import useModalStore from '../../stores/useModalStore';
import Modal from '../../components/Model';

const GreenPage = () => {
  const { modal1Open, modal2Open, toggleModal1, toggleModal2 } = useModalStore();

  return (
    <div className="min-h-screen bg-green-300 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl p-4">GREEN</h1>
      <div className="flex">
      <button onClick={toggleModal1} className="m-4 p-2 bg-white">Open Modal 1</button>
      <button onClick={toggleModal2} className="m-4 p-2 bg-white">Open Modal 2</button>
      </div>
      {modal1Open && <Modal title="Modal 1"  />}
      {modal2Open && <Modal title="Modal 2" />}
    </div>
  );
};

export default GreenPage;
