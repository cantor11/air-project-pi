import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import useQuizStore from "../../stores/quiz-store";
import { NavLink } from "react-router-dom";

import { db } from "../../../../firebase.config"; // Ajusta la ruta según tu estructura
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../../../firebase.config";

/**
 * Header Component
 * 
 * This functional React component renders the navigation bar for the application.
 * It includes a logo linked to the home page, navigation links to various sections
 * such as "Quiz," "Efecto invernadero," "Smog," and "Agotamiento de la capa de ozono."
 * Additionally, it features a logout icon on the right. The component utilizes
 * `react-router-dom` for seamless navigation between different routes.
 */

const Header = () => {
  const { user, logout } = useAuthStore();
  const { questionsSection, setQuestionsSection } = useQuizStore(); // Información del store
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
  }, [logout]);

  const syncFirestoreData = async () => {
    if (!auth.currentUser) {
      alert("Debes iniciar sesión para enviar el quiz.");
      return;
    }

    const userId = auth.currentUser.uid;
    const userRef = doc(db, "quizzes", userId);

    try {
      const userSnapshot = await getDoc(userRef);
      const existingData = userSnapshot.exists() ? userSnapshot.data() : null;

      const oldScoreSum = existingData?.userScore?.reduce((a, b) => a + b, 0) || 0;
      if (oldScoreSum != 0) {
        setQuestionsSection({
          bestUserScore : existingData.userScore
        });
        console.log(questionsSection.bestUserScore) 
      } 
    } catch (error) {
      console.error("Error al guardar el quiz en DB:", error);
      alert("Ocurrió un error al enviar el quiz. Revisar consola.");
    }
  };

  return (
    <header>
      <div className="left-section">
        <Link to="/home">
          <img src="/images/logo.webp" alt="Inicio" className="logo-image" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/efecto-invernadero"
              className={({ isActive }) => isActive ? "button-link active" : "button-link"}
            >
              Efecto invernadero
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/smog"
              className={({ isActive }) => isActive ? "button-link active" : "button-link"}
            >
              Smog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/capa-ozono"
              className={({ isActive }) => isActive ? "button-link active" : "button-link"}
            >
              Capa de ozono
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) => isActive ? "button-link active" : "button-link"}
              onClick={syncFirestoreData}
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="right-section">
        {user ? (
          <button onClick={handleLogout} className="button-logout">
            <img src="/images/logout.webp" alt="Logout" className="logout" />
          </button>
        ) : (
          <Link to="/login">
            <img src="/images/logout.webp" alt="Login" className="login" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;