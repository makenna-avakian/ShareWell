import React, {useEffect, useRef} from "react";
import useModalStore from "@/stores/useModalStore";
import modalData from '../data/modalData.json';
import Image from 'next/image';


interface ModalProps {
    title: 'Modal 1' | 'Modal 2' | 'Modal 3';
    text?: string;
    time?: string;
}

const Modal: React.FC<ModalProps> = ({ title }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal1, closeModal2, closeModal3 } = useModalStore();

  //Handle closing outside of the Modal
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

  //Modal's Lorem Ispum texts and time are same from modal to modal, so setting that here
  const modalInfo = title === 'Modal 1'
    ? modalData.modal1
    : title === 'Modal 2'
    ? modalData.modal2
    : modalData.modal3;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="w-[640px] h-[498px] bg-white rounded-xl flex-col justify-start items-center inline-flex overflow-auto">
    <div className="w-[640px] h-56 bg-indigo-500 items-center pl-12 pt-12 pr-[196px] pb-[43px] shadow-custom inline-flex">
        <div className="flex-col justify-start items-start gap-3 inline-flex m-0 p-0">
            <div className="justify-start items-center gap-[106px] inline-flex m-0 p-0">
                <div className="w-[396px] text-white text-[32px] font-['Poppins'] leading-[44.80px]">{modalInfo.title}</div>
            </div>
            <div className="text-white text-sm  font-['Poppins'] leading-tight">{modalInfo.text}</div>
            <div className="text-white text-base  font-['Poppins'] leading-snug">{modalInfo.date}<br/>{modalInfo.time}</div>
        </div>
        <div className="w-[345px] h-[343.80px] pl-10 pr-[38.43px] pt-[45.02px] pb-[44.94px] origin-top-left -rotate-45 justify-center items-center inline-flex">
<div className="w-[266.55px] h-[253.85px] relative flex flex-col justify-start items-start">
  <div className="w-[118.99px] h-[158.65px] relative">
        <img src="/images/greenguy.svg" alt="Blob 1" className="w-[115.74px] h-[157.72px] left-[1.60px] top-[0.26px] absolute m-0 p-0"/>
      </div>
      <div className="w-[166.59px] h-[199.91px] relative">
        <img src="/images/yellowguy.svg" alt="Blob 2" className="w-[160.23px] h-[195.15px] left-[1.86px] top-[1.53px] absolute m-0 p-0"/>
     </div>
     <div className="w-[138.03px] h-[171.35px] relative">
        <img src="/images/blueguy.svg" alt="Blob 3"  className="w-[137.98px] h-[166.65px] left-[-0px] top-[1.69px] absolute"/>
        </div>
    </div>
    </div>
    </div>
    <div className="self-stretch px-6 pt-6 justify-start items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
            <div className="w-[400px] text-neutral-600 text-sm  font-['Poppins'] leading-tight">Lorem Ipsum</div>
                <div className="self-stretch text-indigo-500 text-base font-bold font-['Poppins'] leading-snug">Lorem Ipsum</div>
            </div>
        </div>
        <div className="w-6 h-6 relative" />
    </div>
    <div className="self-stretch h-20 px-6 pt-4 pb-6 flex-col justify-center items-start gap-4 flex">
        <div className="self-stretch text-zinc-800 text-sm  font-['Poppins'] leading-tight">{modalInfo.body}</div>
    </div>
    <div className="self-stretch h-[124px] p-6 border-t border-gray-200 flex-col justify-start items-start gap-2.5 flex">
        <div className="w-[592px] text-center text-neutral-600 text-sm font-medium font-['Poppins'] leading-tight">Lorem Ipsum is simply dummy text.</div>
        <button className="w-[592px] h-[46px] px-8 py-3 bg-teal-500 opacity-10 rounded-xl justify-center items-center gap-2 inline-flex">
            <div className="text-zinc-800 opacity-20 text-base font-normal font-['Poppins'] uppercase leading-snug">Lorem Ipsum</div>
        </button>
    </div>
</div>
      </div>
  );
};

export default Modal;


