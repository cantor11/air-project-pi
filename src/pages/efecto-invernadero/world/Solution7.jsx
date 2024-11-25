import { RigidBody } from "@react-three/rapier";

import { BucketModel } from "./BucketModel";
import { CloudModel } from "./CloudModel";
import { RainModel } from "./RainModel";

/**
 * Solution7 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like
 * buckets, clouds and rain which will be used for the immersion in the page.
 * Some objects are put inside rigid bodies to put them in physics environment.
 */


const Solution7 = () => {

  return (
    <>
      <RigidBody
        name="bucket1"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        colliders="hull"
      >
        <BucketModel position={[-800,300,-150]} scale={2000} />
      </RigidBody>
      <RigidBody
        name="bucket2"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        colliders="hull"
      >
        <BucketModel position={[-800,300,-350]} scale={2000} />
      </RigidBody>
      <CloudModel position={[-850,400,-120]} scale={20} />
      <CloudModel position={[-850,400,-260]} scale={20} />
      <CloudModel position={[-850,400,-400]} scale={20} />
      <RainModel  position={[-870,0,-250]} scale={0.8} />
    </>
  )
}

export default Solution7;