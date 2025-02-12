'use client'

import React from 'react';
import useModalStore from '../../stores/useModalStore';
import Modal from '../../components/Model';

const RedPage = () => {
  const { modal1Open, modal3Open, toggleModal1, toggleModal3 } = useModalStore();

  return (
    <div className="min-h-screen bg-red-300 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl p-4 justify-self-center">RED</h1>
      <div className="flex">
      <button onClick={toggleModal1} className="m-4 p-2 bg-white">Open Modal 1</button>
      <button onClick={toggleModal3} className="m-4 p-2 bg-white">Open Modal 3</button>
      </div>
      {modal1Open && <Modal title="Modal 1" />}
      {modal3Open && <Modal title="Modal 3"/>}
    </div>
  );
};

export default RedPage;
