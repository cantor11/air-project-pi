import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Page404 from "../pages/page-404/Page404";
import Smog from "../pages/smog/Smog";
import Ozono from "../pages/capa-ozono/Ozono";
<<<<<<< HEAD
import GreenhouseEffect from "../pages/efecto-invernadero/GreenhouseEffect";
=======
import HomeEfecInv from "../pages/efecto-invernadero/HomeEfecInv";
>>>>>>> 0c6585e19d6788ba400115226acd79e0b9ae4037

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
<<<<<<< HEAD
        <Route path="/efecto-invernadero" element={<GreenhouseEffect />} />
=======
        <Route path="/efecto-invernadero" element={<HomeEfecInv />} />
>>>>>>> 0c6585e19d6788ba400115226acd79e0b9ae4037
        <Route path="/" element={<Login />} />
        <Route path="/smog" element={<Smog/>}/>
        <Route path="/capa-ozono" element={<Ozono />} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesProject;