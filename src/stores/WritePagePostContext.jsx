import { create } from "zustand";
import { nanoid } from "nanoid";

export const useWriteStore = create((set, get) => ({
  title: "",
  tags: [], // { label: string, id: string } 객체 배열
  content: "",
  description: "",
  visibility: "public", // "public" or "private"
  series: "",
  url: "",

  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
  setDescription: (description) => set({ description }),
  setVisibility: (visibility) => {
    if (["public", "private"].includes(visibility)) {
      set({ visibility });
    }
  },
  setSeries: (series) => set({ series }),
  setURL: (url) => set({url}),

  // 태그 관련 메서드
  addTag: (label) => {
    if (!label) return;
    const tags = get().tags;

    const isDuplicate = tags.some((tag) => tag.label === label);
    if (isDuplicate) return;

    set((state) => ({
      tags: [...state.tags, { label, id: nanoid() }],
    }));
  },

  deleteTag: (tagId) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id !== tagId),
    })),

  // 전체 초기화
  resetWriteState: () =>
    set({
      title: "",
      tags: [],
      content: "",
      description: "",
      visibility: "public",
      series: "",
      url: "",
    }),
}));