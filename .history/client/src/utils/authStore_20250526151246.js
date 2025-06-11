import { create } from 'zustand'

const useAuthStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (newUser) => set({ currentUser: newUser}),
  removeCurrentUser: () => set({ currentUser: null }),
  updateCurrentUser: (updatedUser) => set({ currentUser: updatedUser }),
}))

export default useAuthStore;