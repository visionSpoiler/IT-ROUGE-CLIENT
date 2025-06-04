import { create } from "zustand";

export const useWritePageLinkModalContext = create((set, get) => ({
  isLinkModalOpen: false,
  linkText: "",
  position: { x: 0, y: 0 },
  closeLinkModal: () => {
    set({ isLinkModalOpen: false });
  },
  openLinkModal: () => {
    set({ isLinkModalOpen: true, linkText: "" });
  },
  setIndex: (x, y) => set({ position: { x, y } }),
  setLinkText: (text) => set({ linkText: text }),
}));
