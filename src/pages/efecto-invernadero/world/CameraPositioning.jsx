import { useMemo } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * CameraPositioning component provides a camera animation using 'react-three/fiber' and 'three'.
 * It allows to change the camera view from main (Greenshouse Effect title and introduction)
 * to another view which is Awareness section and vice versa. To know which view to show
 * it will get the information brought from a store made with Zustand.
 */

const CameraPositioning = () => {
  const { view } = useGreeenhouseStore(); // Information brought from store

  const awareSectionPosition = useMemo(() => new THREE.Vector3(-600, -140, -150), []);
  const awareSectionLookAt = useMemo(() => new THREE.Vector3(-1000, -300, -300), []);
  
  const titlePosition = useMemo(() => new THREE.Vector3(0, 100, 100), []);
  const titleLookAt = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  const speed = 0.03; // Speed that the camera moves from actual position to target one
  const { camera } = useThree();

  useFrame(() => {
    // If has to show awareness view or title view, we set the position and lookAt to the target selected
    const targetPosition = view.isAwarenessSectionView ? awareSectionPosition : titlePosition;
    const targetLookAt = view.isAwarenessSectionView ? awareSectionLookAt : titleLookAt;

    // Interpolation to the position and orientation
    camera.position.lerp(targetPosition, speed);

    const currentLookAt = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
    currentLookAt.lerp(targetLookAt, speed);
    camera.lookAt(currentLookAt);

    // Stop animation when camera is close enough to the objective
    if (camera.position.distanceTo(targetPosition) < 0.1) {
      camera.position.copy(targetPosition);
      camera.lookAt(targetLookAt);
      // Animation stops
    }
    // Camera stops moving
  });
  return null;
};

export default CameraPositioning;