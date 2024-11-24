import { RigidBody } from "@react-three/rapier";

import { SolarPanelModel } from "./SolarPanelModel";

/**
 * Solution2 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like solar
 * panels for the immersion in the page. The objects are put inside
 * rigid bodies to put them in physics environment.
 */


const Solution2 = () => {

  return (
    <>
      <RigidBody
        name="solarPanel1"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={solarPanel1Ref}
        colliders="hull"
      >
        <SolarPanelModel position={[-800,310,-350]} scale={1} />
      </RigidBody>

      <RigidBody
        name="solarPanel2"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={solarPanel2Ref}
        colliders="hull"
      >
        <SolarPanelModel position={[-800,310,-150]} scale={1.3} />
      </RigidBody>
    </>
  )
}

export default Solution2;