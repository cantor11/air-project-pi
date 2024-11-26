import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const Interactions = (props) => {
  const { camera } = useThree();

  const handleHitboxBushOne = (e) => {
    camera.position.set(1, 3, 20); 
    camera.lookAt(0, 2, 0);
  }

  const handleHitboxBushTwo = (e) => {
    camera.position.set(1, 3, -21); 
    camera.lookAt(0, 2, 0);
  }

  const handleHitboxBushThree = (e) => {
    camera.position.set(-17, 3, 0); 
    camera.lookAt(0, 2, 0);
  }

  const handleHitboxBushFour = (e) => {
    camera.position.set(20, 4, 0); 
    camera.lookAt(0, 2, 0);
  }
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        // Cambiar la posición de la cámara cuando se presiona la flecha derecha
        camera.position.set(1, 3, 20);
        camera.lookAt(0, 2, 0); // Ajusta si necesitas que la cámara mire hacia un punto específico
      }
      if (e.key === 'ArrowLeft') {
        // Cambiar la posición de la cámara cuando se presiona la flecha hacia arriba
        camera.position.set(1, 3, -21);
        camera.lookAt(0, 2, 0); // Ajusta si necesitas que la cámara mire hacia un punto específico
      }
      if (e.key === 'ArrowUp') {
        // Cambiar la posición de la cámara cuando se presiona la flecha hacia arriba
        camera.position.set(20, 4, 0);
        camera.lookAt(0, 2, 0); // Ajusta si necesitas que la cámara mire hacia un punto específico
      }
      if (e.key === 'ArrowDown') {
        // Cambiar la posición de la cámara cuando se presiona la flecha hacia arriba
        camera.position.set(-17, 3, 0);
        camera.lookAt(0, 2, 0); // Ajusta si necesitas que la cámara mire hacia un punto específico
      }
    };

    // Agrega el event listener
    window.addEventListener('keydown', handleKeyDown);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [camera]);
    return (
      <group>
        <mesh name='HitboxBushOne' onClick={(e) => handleHitboxBushTwo(e)} rotation-x={Math.PI * 0.5} position={[-10, 0.1, -0.5]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>
        <mesh name='HitboxBushOne' onClick={(e) => handleHitboxBushOne(e)} rotation-x={Math.PI * 0.5} position={[-10, 0.1, 3]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>
        
        <mesh name='HitboxBushTwo' onClick={(e) => handleHitboxBushThree(e)} rotation-x={Math.PI * 0.5} position={[0, 0.1, 13]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>
        <mesh name='HitboxBushTwo' onClick={(e) => handleHitboxBushFour(e)} rotation-x={Math.PI * 0.5} position={[2, 0.1, 13]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>

        <mesh name='HitboxBushThree' onClick={(e) => handleHitboxBushThree(e)} rotation-x={Math.PI * 0.5} position={[0, 0.1, -13]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>
        <mesh name='HitboxBushThree' onClick={(e) => handleHitboxBushFour(e)} rotation-x={Math.PI * 0.5} position={[2, 0.1, -13]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>

        <mesh name='HitboxBushThree' onClick={(e) => handleHitboxBushTwo(e)} rotation-x={Math.PI * 0.5} position={[14, 0.1, -1]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>
        <mesh name='HitboxBushThree' onClick={(e) => handleHitboxBushOne(e)} rotation-x={Math.PI * 0.5} position={[14, 0.1, 1]}>
            <boxGeometry args={[0.9, 0.9, 0.9]}/> 
            <meshStandardMaterial color={"black"}/>
        </mesh>
      </group>
    );
};
  
export default Interactions;