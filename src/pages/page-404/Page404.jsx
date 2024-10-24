import Header from "../../components/header/Header";
import "./Page404.css";

/**
 * Page404 Component
 * 
 * This functional React component serves as a 404 error page, displayed when a user 
 * navigates to a non-existent link within the application. It includes the `Header` 
 * component for consistent navigation and displays a message indicating that the 
 * requested page could not be found. The styling is managed through an external CSS file.
 */

const Page404 = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p>Lo sentimos, la página que buscas no existe.</p>
      </div>
    </>
  );
};

export default Page404;
