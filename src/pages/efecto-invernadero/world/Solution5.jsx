import { RigidBody } from "@react-three/rapier";
import { MinecraftCowModel } from "./MinecraftCow";

/**
 * Solution5 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like
 * Minecraft cows for the immersion in the page.
 * The objects are put inside rigid bodies to put them in physics environment.
 */


const Solution5 = () => {

  return (
    <>
      <RigidBody
        name="minecraftCow_1"
        restitution={1.9}
        type="dynamic"
        gravityScale={9}
        mass={10}
        //ref={minecraftCow1Ref}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,330,-350]} scale={3} />
      </RigidBody>

      <RigidBody
        name="minecraftCow_2"
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={minecraftCow2Ref}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,330,-300]} scale={2} />
      </RigidBody>

      <RigidBody
        name="minecraftCow_3"
        restitution={1.9}
        type="dynamic"
        gravityScale={9}
        mass={10}
        //ref={minecraftCow3Ref}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,350,-250]} scale={3} />
      </RigidBody>

      <RigidBody
        name="minecraftCow_4"
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        mass={100}
        //ref={minecraftCow4Ref}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,330,-200]} scale={2} />
      </RigidBody>

      <RigidBody
        name="minecraftCow_5"
        restitution={1.9}
        type="dynamic"
        gravityScale={9}
        mass={10}
        //ref={minecraftCow5Ref}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,370,-150]} scale={3} />
      </RigidBody>
    </>
  )
}

export default Solution5;