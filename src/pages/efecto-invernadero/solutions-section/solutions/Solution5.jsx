import { useCallback, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { MinecraftCowModel } from "./MinecraftCow";
import useGreenhouseStore from "../../../../stores/greenhouse-store";

/**
 * Solution5 Component
 * 
 * This functional React component sets up some 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates some objects like
 * Minecraft cows for the immersion in the page.
 * The objects are put inside rigid bodies to put them in physics environment.
 * In addition, this uses PositionalAudio from drei library to play audio
 * on the scene, the audio will be played if the page is not muted.
 */


const Solution5 = () => {
  const { sound } = useGreenhouseStore(); // Information brought from store
  const audioRef = useRef();

  // Function to handle audio
  const handleAudio = useCallback(() => {
    // If audio's page is not muted, then play
    if (!sound.isMuted) {
      // Stop audio if it's playing
      if (audioRef.current.isPlaying) {
        audioRef.current.stop();
      }
      audioRef.current.play();
      audioRef.current.setVolume(50);
    }
  }, [sound]);


  return (
    <>
      <RigidBody
        name="minecraftCow_1"
        restitution={1.9}
        type="dynamic"
        gravityScale={9}
        mass={10}
        colliders="hull"
        onCollisionEnter={({ other }) => {  
          if(other.rigidBodyObject.name === "rbFloor") {
            handleAudio();
          }
        }}
      >
        <MinecraftCowModel position={[-800,330,-350]} scale={3} />
      </RigidBody>

      <RigidBody
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        mass={100}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,330,-300]} scale={2} />
      </RigidBody>

      <RigidBody
        restitution={1.9}
        type="dynamic"
        gravityScale={9}
        mass={10}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,350,-250]} scale={3} />
      </RigidBody>

      <RigidBody
        restitution={1.8}
        type="dynamic"
        gravityScale={9}
        mass={100}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,330,-200]} scale={2} />
      </RigidBody>

      <RigidBody
        restitution={1.9}
        type="dynamic"
        gravityScale={9}
        mass={10}
        colliders="hull"
      >
        <MinecraftCowModel position={[-800,370,-150]} scale={3} />
      </RigidBody>

      <group position={[-800,370,-150]}>
        <PositionalAudio ref={audioRef} loop={false} url="/sounds/minecraft_cow_sound.mp3" distance={5} />
      </group>
    </>
  )
}

export default Solution5;