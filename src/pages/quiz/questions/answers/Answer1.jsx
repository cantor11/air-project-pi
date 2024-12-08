import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef, useCallback } from "react";

const Answer1 = () => {
    const topLeftImpulse = useRef();
    const topRightImpulse = useRef();
    const bottomLeftImpulse = useRef();
    const bottomRightImpulse = useRef();
  
    const impulse1 = useCallback(() => {
        topLeftImpulse.current.applyImpulse({ x: 0, y: 100, z: -200 }, true)
    }, []);
    
    const impulse2 = useCallback(() => {
        topRightImpulse.current.applyImpulse({ x: 0, y: 100, z: 200 }, true)
    }, []);

    const impulse3 = useCallback(() => {
        bottomLeftImpulse.current.applyImpulse({ x: 0, y: 200, z: -200 }, true)
    }, []);
    
    const impulse4 = useCallback(() => {
        bottomRightImpulse.current.applyImpulse({ x: 0, y: 200, z: 200 }, true)
    }, []);

    return (
        <>
        <RigidBody ref={topLeftImpulse}>
            <mesh name="topLeft" position={[-19, 8, 15]} onClick={impulse1}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </RigidBody>
        <RigidBody ref={topRightImpulse}>
            <mesh name="topRight" position={[-19, 8, -15]} onClick={impulse2}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </RigidBody>
        <RigidBody ref={bottomLeftImpulse}>
            <mesh name="bottomLeft" position={[-19, -1, 15]} onClick={impulse3}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </RigidBody>
        <RigidBody ref={bottomRightImpulse}>
            <mesh name="bottomRight" position={[-19, -1, -15]} onClick={impulse4}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </RigidBody>
        </>
    )
  };
  
  export default Answer1;