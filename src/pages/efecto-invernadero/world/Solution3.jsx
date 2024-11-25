import { RigidBody } from "@react-three/rapier";

import { BmxBikeModel } from "./BmxBikeModel";
import { BusModel } from "./BusModel";

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
        name="bus"
        restitution={1.5}
        type="dynamic"
        gravityScale={2}
        mass={1}
        //ref={busRef}
        colliders="hull"
      >
        <BusModel position={[-800,310,-350]} scale={35} />
      </RigidBody>

      <RigidBody
        name="bmxBike"
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={bmxBikeRef}
        colliders="hull"
      >
        <BmxBikeModel position={[-800,310,-150]} scale={15} />
      </RigidBody>
    </>
  )
}

export default Solution3;