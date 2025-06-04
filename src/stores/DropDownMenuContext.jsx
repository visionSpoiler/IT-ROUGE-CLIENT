import { create } from "zustand";

export const dropDownMenuContext = create((set, get) => ({
  isHeaderUserDropDownMenuOpen: false,
  isSortSubOptionMenuOpen: false,
  isMainPageHambergerMenuOpen: false,
  closeAllDropDownMenu: () => set({isHeaderUserDropDownMenuOpen: false, isSortSubOptionMenuOpen: false, isMainPageHambergerMenuOpen: false,}),
   toggleHeaderUserDropDownMenu: () => {
    const { closeAllDropDownMenu } = get()
    closeAllDropDownMenu()
    set((state) => ({
      isHeaderUserDropDownMenuOpen: !state.isHeaderUserDropDownMenuOpen,
    }))
  },

  toggleSortSubOptionMenu: () => {
    const { closeAllDropDownMenu } = get()
    closeAllDropDownMenu()
    set((state) => ({
      isSortSubOptionMenuOpen: !state.isSortSubOptionMenuOpen,
    }))
  },

  toggleMainPageHambergerMenu: () => {
    const { closeAllDropDownMenu } = get()
    closeAllDropDownMenu()
    set((state) => ({
      isMainPageHambergerMenuOpen: !state.isMainPageHambergerMenuOpen,
    }))
  },
}));
