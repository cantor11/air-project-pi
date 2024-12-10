import { RigidBody } from "@react-three/rapier";

import { LedBulbModel } from "./LedBulbModel";
import { PowerPlugModel } from "./PowerPlugModel";
import { SpiralBulbModel } from "./SpiralBulbModel";

/**
 * Solution1 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like bulbs
 * and power plugs for the immersion in the page. The objects are put inside
 * rigid bodies to put them in physics environment.
 */


const Solution1 = () => {

  return (
    <>
      <RigidBody
        name="ledBulb"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={ledBulbModelRef}
        colliders="hull"
      >
        <LedBulbModel position={[-800,300,-250]} scale={800} />
      </RigidBody>

      <RigidBody
        name="lightBulb"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={spiralBulbModelRef}
        colliders="hull"
      >
        <SpiralBulbModel position={[-800,310,-350]} scale={10} />
      </RigidBody>

      <RigidBody
        name="powerPlug"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={powerPlugModelRef}
        colliders="hull"
      >
        <PowerPlugModel position={[-800,380,-100]} scale={400} />
      </RigidBody>
    </>
  )
}

export default Solution1;