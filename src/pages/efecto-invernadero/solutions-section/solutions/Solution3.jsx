import { RigidBody } from "@react-three/rapier";

import { BmxBikeModel } from "./BmxBikeModel";
import { MioBusModel } from "./MioBusModel";

/**
 * Solution3 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like a bus
 * and a bike for the immersion in the page. The objects are put inside
 * rigid bodies to put them in physics environment.
 */


const Solution3 = () => {

  return (
    <>
      <RigidBody
        restitution={1.5}
        type="dynamic"
        gravityScale={5}
        colliders="hull"
      >
        <MioBusModel position={[-800,310,-350]} scale={[8,8,4]} />
      </RigidBody>

      <RigidBody
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        mass={100}
        colliders="hull"
      >
        <BmxBikeModel position={[-800,310,-150]} scale={15} />
      </RigidBody>
    </>
  )
}

export default Solution3;