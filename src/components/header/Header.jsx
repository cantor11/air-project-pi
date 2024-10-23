import "./Header.css";
import { Link } from "react-router-dom";

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
        <Link to="/about">
          <img src="/images/logout.webp" alt="logout" className="logout" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
