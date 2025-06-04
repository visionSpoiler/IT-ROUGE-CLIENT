import { create } from "zustand";

export const userContext = create((set) => ({
  userId: undefined,
  setUserId: (userId) => set({ userId }),
  initUserId: () => set({ userId: undefined }),
}));
