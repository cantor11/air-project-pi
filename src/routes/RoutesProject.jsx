import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Page404 from "../pages/page-404/Page404";

/**
 * RoutesProject component sets up the routing for the application using React Router.
 * It defines the main routes for pages into the project, with the default route
 * redirecting to the Login page.
 */

const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />  
        <Route path="/home" element={<Home />} />   
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesProject;
