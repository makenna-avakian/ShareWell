import zustand from "zustand";
import create from 'zustand';

interface ModalState {
  modal1Open: boolean;
  modal2Open: boolean;
  modal3Open: boolean;
  toggleModal1: () => void;
  toggleModal2: () => void;
  toggleModal3: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  modal1Open: false,  
  modal2Open: false,  
  modal3Open: false,  
  toggleModal1: () => set((state) => ({ modal1Open: !state.modal1Open })), 
  toggleModal2: () => set((state) => ({ modal2Open: !state.modal2Open })), 
  toggleModal3: () => set((state) => ({ modal3Open: !state.modal3Open })), 
}));

export default useModalStore;
