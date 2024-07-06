'use client'

import React from 'react';
import useModalStore from '../../stores/useModalStore';
import Modal from '../../components/Model';

const BlueModal = () => {
    const { modal2Open, modal3Open, toggleModal2, toggleModal3 } = useModalStore();

    return (
        <div className ="min-h-screen bg-blue-300">
            <h1 className="text-white text-3xl p-4">BLUE</h1>
            <button onClick={toggleModal2} className='m-4 p-2 bg-white'>Open Modal 2</button>
            <button onClick={toggleModal3} className='m-4 p-2 bg-white'>Open Modal 3</button>
            {modal2Open && <Modal title="Modal 2" />}
            {modal3Open && <Modal title="Modal 3" />}
        </div>
    )
};

export default BlueModal;