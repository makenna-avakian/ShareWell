import React, { useEffect, useRef, useState } from 'react';
import useModalStore from '@/stores/useModalStore';
import modalData from '../data/modalData.json';
import Image from 'next/image';
import { tailwindClasses } from '@/tailwind';

interface ModalProps {
  title: 'Modal 1' | 'Modal 2' | 'Modal 3';
}


const Modal: React.FC<ModalProps> = ({ title }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal1, closeModal2, closeModal3 } = useModalStore();
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('sm');

  //Find the screen size and listen for resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setScreenSize('lg');
      else if (window.innerWidth >= 768) setScreenSize('md');
      else setScreenSize('sm');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //Close the modal when clicked outside
  const handleClose = () => {
    if (title === 'Modal 1') closeModal1();
    else if (title === 'Modal 2') closeModal2();
    else if (title === 'Modal 3') closeModal3();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  //Get the modal data based on the screen size and the modal title
  const getModalInfo = (title: string) => {
    switch (screenSize) {
      case 'lg':
        return modalData.web[`modal${title === 'Modal 1' ? '4' : title === 'Modal 2' ? '5' : '6'}`];
      case 'md':
        return modalData.tablet[`modal${title === 'Modal 1' ? '7' : title === 'Modal 2' ? '8' : '9'}`];
      default:
        return modalData.mobile[`modal${title === 'Modal 1' ? '1' : title === 'Modal 2' ? '2' : '3'}`];
    }
  };

  const modalInfo = getModalInfo(title);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} 
      className="w-[339px] h-[477px] bg-white rounded-xl flex-col justify-start items-center sm:w-[339px] sm:h-[477px] md:w-[640px] md:h-[498px] lg:w-[640px] lg:h-[498px] overflow-auto"
      >
    <div className="self-stretch h-[181px] bg-indigo-500 justify-center items-center gap-2.5  sm:self-stretch sm:h-[181px] sm:bg-indigo-500 sm:justify-center sm:items-center sm:gap-2.5 md:w-[640px] md:h-56 md:bg-indigo-500 md:justify-center md:items-center md:gap-2.5 lg:self-stretch lg:h-56 lg:bg-indigo-500 lg:shadow-custom lg:justify-center lg:items-center lg:gap-2.5 relative overflow-hidden">
        <div className="flex-col justify-start items-start gap-3 inline-flex text-left ml-6 mt-12 mb-6 md:ml-12 md:mt-12 lg:ml-12 lg:mt-12">
            <div className="justify-start items-center gap-[106px] ">
                <div className={modalInfo.title.className}>{modalInfo.title.text}</div> 
            </div>
            <div className={modalInfo.text.className}>{modalInfo.text.text}</div>
            <div className={modalInfo.date.className}>{modalInfo.date.text}<br/>{modalInfo.time.text}</div>
        </div>
        <img src="/images/logo.svg" alt="logo" className={"absolute bottom-0 right-0 "+ modalInfo.image.className}/>
    </div>
    <div className="self-stretch px-6 pt-6 justify-start items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
            <div className={modalInfo.subtitle1.className}>{modalInfo.subtitle1.text}</div>
                <div className={modalInfo.subtitle2.className}>{modalInfo.subtitle2.text}</div>
            </div>
        </div>
        <div className="w-6 h-6 relative" />
    </div>
    <div className="px-6 pt-4 pb-6 self-stretch flex-col justify-center items-start gap-4 flex sm:h-32 sm:text-base sm:font-medium lg:h-20 lg:text-sm lg:font-normal md:h-20 md:text-sm md:font-medium">
        <div className={modalInfo.body.className}>{modalInfo.body.text}</div>
    </div>
    <div className="self-stretch h-[126px] p-6 border-t border-gray-200 flex-col justify-start items-start gap-2.5 flex lg:h-[124px] md:h-[124px] sm:h-[126px]">
        <div className="self-stretch text-center text-neutral-600 text-sm font-medium font-['Poppins'] leading-tight sm:font-medium lg:font-medium md:font-normal">{modalInfo.dummy.text}</div>
        <div className={modalInfo.button.className + " gap-2 self-stretch bg-teal-500 opacity-10 rounded-xl justify-center items-center inline-flex"}>
            <div className={modalInfo.button.buttonClassName}>{modalInfo.button.text}</div>
        </div>
    </div>
</div>
      </div>
  );
};

export default Modal;