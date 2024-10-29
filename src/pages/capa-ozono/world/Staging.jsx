import { Sky } from "@react-three/drei";
  
  
  
  const Staging = () => {
    return (
      <>
      <Sky
        distance={450000} // Distancia para alejar el cielo
        sunPosition={[0, -1, 0]} // Posición del "sol" por debajo del horizonte
        inclination={0.6} // Inclinación baja para simular un ambiente nocturno
        azimuth={0.25} // Dirección del "sol"
        turbidity={10} // Aumenta para reducir la claridad del cielo
      />
      </>
    );
  };
  
  export default Staging;