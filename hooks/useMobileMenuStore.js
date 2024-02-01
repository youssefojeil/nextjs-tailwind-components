// useMobileMenuStore.js
import { create } from 'zustand';

const useMobileMenuStore = create((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useMobileMenuStore;
