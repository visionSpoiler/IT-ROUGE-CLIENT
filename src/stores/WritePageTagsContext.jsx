import { create } from "zustand";
import { nanoid } from "nanoid";

export const writePageTagsContext = create((set, get) => ({
  tags: [], // 각 요소는 { label: string, id: string } 형태

  addTag: (label) => {
    if (!label) return;
    const { tags } = get();

    // 이미 같은 label이 있는 경우 추가하지 않음
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
}));
