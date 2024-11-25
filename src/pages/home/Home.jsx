import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Header from "../../components/header/Header";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
//import { Perf } from "r3f-perf"; //performance stats

/**
 * Home Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize the introduction and summary of the page focused on air-related 
 * environmental issues. It incorporates a `Header` for navigation and utilizes 
 * `Suspense` for lazy loading of components like `Controls` and `Lights`. 
 * The scene aims to enhance user engagement and understanding of environmental topics.
 * In addition, this component uses a 'CameraPositioning' component which will let
 * the user change the view to focus on different content in the page.
 * Every time this component is shown, it will show the Title view first,
 * to do that it will use a store made from Zustand
 */

const Home = () => {
  const cameraSettings = {
    position: [0, 15, 10],
  };

  return (
    <>
    <Header />
      <div className="container">
        <Canvas>
          <CameraPositioning /> {/* Component to handle camera positioning from one section to another */}
          <Suspense fallback={null}>
            <Controls />
            <Lights />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Home;