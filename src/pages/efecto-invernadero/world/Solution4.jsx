import { RigidBody } from "@react-three/rapier";

import { DirtyBottleModel } from "./DirtyBottle";
import { PlasticBottleModel } from "./PlasticBottle";
import { RecycleBinModel } from "./RecycleBinModel";


/**
 * Solution4 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like a
 * dirty water bottle, a plastic water bottle and a recycle bin
 * for the immersion in the page. The objects are put inside rigid bodies
 * to put them in physics environment.
 */


const Solution4 = () => {

  return (
    <>
      <RigidBody
        name="recycleBin"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={recybleBinRef}
        colliders="hull"
      >
        <RecycleBinModel position={[-800,310,-350]} scale={12} />
      </RigidBody>

      <RigidBody
        name="dirtyBottle"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={dirtyBottleRef}
        colliders="hull"
      >
        <DirtyBottleModel position={[-800,350,-250]} scale={4} />
      </RigidBody>

      <RigidBody
        name="plasticBottle"
        restitution={2}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={plasticBottleRef}
        colliders="hull"
      >
        <PlasticBottleModel position={[-800,300,-150]} scale={3} />
      </RigidBody>
    </>
  )
}

export default Solution4;