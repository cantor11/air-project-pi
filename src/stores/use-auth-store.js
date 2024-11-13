import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase.config";

// Create a new Google Auth provider instance
const provider = new GoogleAuthProvider();

// Zustand store for authentication state management
const useAuthStore = create((set) => ({
  user: null, // Stores the currently authenticated user
  loading: true, // Indicates whether authentication state is being loaded

  /**
   * Logs in the user with Google using a popup.
   * @returns {Promise<void>}
   */
  loginGoogleWithPopUp: async () => {
    await signInWithPopup(auth, provider)
      .catch((error) => {
        console.log(error); // Log any error that occurs during login
      });
  },

  /**
   * Logs out the currently authenticated user.
   * @returns {Promise<void>}
   */
  logout: async () => {
    await signOut(auth)
      .then(() => {
        set({ user: null }); // Reset user state to null on successful logout
      })
      .catch((error) => {
        console.log(error); // Log any error that occurs during logout
      });
  },

  /**
   * Observes the authentication state of the user.
   * Sets loading to true while checking the state.
   * Updates the user state based on whether the user is authenticated.
   */
  observeAuthState: () => {
    set({ loading: true }); // Set loading to true while checking auth state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user, loading: false }); // Update user and loading state if authenticated
      } else {
        set({ user: null, loading: false }); // Reset user state and set loading to false if not authenticated
      }
    });
  },
}));

export default useAuthStore;
