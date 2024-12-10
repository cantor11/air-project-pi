import { RigidBody } from "@react-three/rapier";

import { MinecraftTreeModel } from "./MinecraftTree";

/**
 * Solution8 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like
 * trees for the immersion in the page.
 * The objects are put inside rigid bodies to put them in physics environment.
 */


const Solution8 = () => {

  return (
    <>
      <RigidBody
        restitution={1.5}
        type="dynamic"
        gravityScale={9}
        mass={100}
        colliders="hull"
      >
        <MinecraftTreeModel position={[-800,200,-50]} scale={50} />
      </RigidBody>
      <RigidBody
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        colliders="hull"
      >
        <MinecraftTreeModel position={[-800,200,-150]} scale={100} />
      </RigidBody>
      <RigidBody
        restitution={1.7}
        type="dynamic"
        gravityScale={9}
        colliders="hull"
      >
        <MinecraftTreeModel position={[-800,200,-250]} scale={200} />
      </RigidBody>
      <RigidBody
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        colliders="hull"
      >
        <MinecraftTreeModel position={[-800,200,-350]} scale={100} />
      </RigidBody>
      <RigidBody
        restitution={1.5}
        type="dynamic"
        gravityScale={9}
        mass={100}
        colliders="hull"
      >
        <MinecraftTreeModel position={[-800,200,-450]} scale={50} />
      </RigidBody>
    </>
  )
}

export default Solution8;