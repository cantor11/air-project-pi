import { RigidBody } from "@react-three/rapier";
import { CerealSansModel } from "./CerealSansModel";
import { HealthyFoodModel } from "./HealthyFoodModel";

/**
 * Solution6 Component
 * 
 * This functional React component sets up sme 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like
 * healthy food and a cereal for the immersion in the page.
 * The objects are put inside rigid bodies to put them in physics environment.
 */


const Solution6 = () => {

  return (
    <>
      <RigidBody
        name="cerealSans"
        restitution={2}
        type="dynamic"
        gravityScale={1}
        mass={1}
        colliders="hull"
      >
        <CerealSansModel position={[-800,400,-250]} scale={50} />
      </RigidBody>
      <HealthyFoodModel position={[-800,330,-250]} scale={25} />
    </>
  )
}

export default Solution6;