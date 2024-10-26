import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
//import useAuthStore from "../../stores/use-auth-store";

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
  /*
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
  }, [logout]);
  */

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
            <Link to="/quiz" className="button-link">Quiz</Link>
          </li>
          <li>
            <Link to="/efecto-invernadero">Efecto invernadero</Link>
          </li>
          <li>
            <Link to="/smog">Smog</Link>
          </li>
          <li>
            <Link to="/agotamiento-capa-ozono">Agotamiento de la capa de ozono</Link>
          </li>
        </ul>
      </nav>

      <div className="right-section">
        {/*
        {user ? (

          <button className="button-logout">
            <img src="/images/logout.webp" alt="Logout" className="logout" />
          </button>
        ) : (

          <Link to="/login">
            <img src="/images/logout.webp" alt="Login" className="login" />
          </Link>
        )}
        */}

          {/* Esto no va */}
          <Link to="/login">
            <img src="/images/logout.webp" alt="Login" className="login" />
          </Link>

      </div>
    </header>
  );
};

export default Header;
