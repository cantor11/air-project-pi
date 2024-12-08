import { RigidBody } from "@react-three/rapier";

import { SocialMediaIcons } from "./SocialMediaIcons";

/**
 * Solution9 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like
 * Social Media Icons for the immersion in the page.
 * The objects are put inside rigid bodies to put them in physics environment.
 */


const Solution9 = () => {

  return (
    <>
      <SocialMediaIcons position={[-800,310,-250]} scale={4} />
    </>
  )
}

export default Solution9;