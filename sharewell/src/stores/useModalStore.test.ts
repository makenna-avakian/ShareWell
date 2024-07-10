// modalStore.test.ts
import { describe, it, expect } from 'vitest';
import useModalStore from './useModalStore'; // Adjust the path as necessary

describe('useModalStore', () => {
  it('should toggle modal1Open', () => {
    const store = useModalStore.getState();
    expect(store.modal1Open).toBe(false);
    store.toggleModal1();
    expect(useModalStore.getState().modal1Open).toBe(true);
  });

  it('should toggle modal2Open', () => {
    const store = useModalStore.getState();
    expect(store.modal2Open).toBe(false);
    store.toggleModal2();
    expect(useModalStore.getState().modal2Open).toBe(true);
  });

  it('should toggle modal3Open', () => {
    const store = useModalStore.getState();
    expect(store.modal3Open).toBe(false);
    store.toggleModal3();
    expect(useModalStore.getState().modal3Open).toBe(true);
  });

  it('should close modal1', () => {
    const store = useModalStore.getState();
    store.closeModal1();
    expect(useModalStore.getState().modal1Open).toBe(false);
  } );

  it('should close modal2', () => {
    const store = useModalStore.getState();
    store.closeModal2();
    expect(useModalStore.getState().modal2Open).toBe(false);
  } );

  it('should close modal3', () => { 
    const store = useModalStore.getState();
    store.closeModal3();
    expect(useModalStore.getState().modal3Open).toBe(false);
  } );
});
