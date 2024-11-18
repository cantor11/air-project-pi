import {
  Environment,
} from "@react-three/drei";

/**
 * Staging Component
 * 
 * This functional React component sets up a 3D environment using `@react-three/drei`
 * to visualize an environment of space with starts, with the objective to produce the most inmertion.
 */

const Staging = () => {
  return (
    <Environment
      ground={{
        height: 20, // Height of the camera that was used to create the env map (Default: 15)
        radius: 60, // Radius of the world. (Default 60)
        scale: 2500, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
      }}
      files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
      path="/cubemap/space/"
      background={true}
    />
  );
};

export default Staging;