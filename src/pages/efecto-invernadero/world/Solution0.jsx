import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

/**
 * Solution0 Component
 * 
 * This functional React component sets up some 3D objects to use them to show an animation.
 * The animation simulates some objects like 3D Text for the immersion in the page.
 * The objects are put inside rigid bodies to put them in physics environment.
 */


const Solution0 = () => {

  return (
    <>
      <RigidBody
        restitution={2}
        type="dynamic"
        gravityScale={9}
        colliders="hull"
      >
        <Text3D
          font="/fonts/blue-ocean.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={45}
          position={[-800,350,-20]}
          rotation-y={Math.PI / 2}
        >
          {`      Soluciones\n`}
          {`Efecto Invernadero`}
          <meshNormalMaterial />
        </Text3D>
      </RigidBody>

      
    </>
  )
}

export default Solution0;