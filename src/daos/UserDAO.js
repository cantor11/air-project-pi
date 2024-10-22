import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config.js";

class UserDAO {
  constructor() {
    // Reference to the 'users' collection in Firestore
    this.collectionRef = collection(db, "users");
  }

  /**
   * Fetches a user document by email.
   */
  async getUserById(email) {
    // Create a query to find the user by email
    const q = query(this.collectionRef, where('email', '==', email));
    
    return await getDocs(q)
      .then((userDoc) => {
        // Check if the user document exists
        if (!userDoc.empty) {
          return { success: true };
        } else {
          return { success: false };
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  /**
   * Creates a new user document.
   */
  async createUser(userData) {
    await addDoc(this.collectionRef, userData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  /**
   * Updates an existing user document by ID.
   */
  async updateUser(id, userData) {
    const userRef = doc(this.collectionRef, id);
    
    await updateDoc(userRef, userData)
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  /**
   * Deletes a user document by ID.
   */
  async deleteUser(id) {
    await deleteDoc(doc(this.collectionRef, id))
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
}

// Export a singleton instance of UserDAO
export default new UserDAO();