import { 
  EffectComposer, 
  Noise, 
  Bloom, 
  SSAO, 
  Vignette, 
  BrightnessContrast, 
  HueSaturation, 
  Outline, 
  ToneMapping 
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

/**
 * This component applies advanced post-processing effects to enhance the visual quality 
 * and realism of a 3D scene. It includes the following effects:
 * - Noise: Adds texture and visual grain for a dynamic look.
 * - Bloom: Highlights bright areas for a glowing effect.
 * - SSAO: Simulates ambient occlusion for deeper, more realistic shadows.
 * - Vignette: Darkens the edges to focus attention on the center of the scene.
 * - BrightnessContrast: Adjusts brightness and contrast levels for better lighting balance.
 * - HueSaturation: Fine-tunes the color intensity and hue for color grading.
 * - Outline: Highlights object edges to emphasize contours and visibility.
 * - ToneMapping: Balances dynamic range for better exposure and lighting adaptation.
 * These effects collectively create an immersive, visually stylized experience for the user.
 */

const SmogPostProcessing = () => {
  return (
    <EffectComposer disableNormalPass>
      <Noise 
        premultiply
        blendFunction={BlendFunction.ADD}
        opacity={0.5}
      />
      
      {/*Bloom */}
      <Bloom 
        intensity={0.8} 
        luminanceThreshold={0.7} 
        luminanceSmoothing={0.6} 
        blendFunction={BlendFunction.ADD}
      />

      {/*SSAO (Ambient Occlusion) */}
      <SSAO
        samples={16} 
        radius={0.1} 
        intensity={15} 
        luminanceInfluence={0.6} 
        color="black" 
      />

      {/*Vignette */}
      <Vignette 
        offset={0.23} 
        darkness={0.8} 
        eskil={false} 
        blendFunction={BlendFunction.NORMAL}
      />

      <BrightnessContrast 
        brightness={0.13}
        contrast={0.25} 
      />

      <HueSaturation 
        hue={0} 
        saturation={-0.1} 
      />

      <Outline 
        edgeStrength={2.5} 
        pulseSpeed={0.3} 
        visibleEdgeColor="white" 
        hiddenEdgeColor="red" 
      />

      <ToneMapping 
        adaptive={true} 
        resolution={256} 
        middleGrey={0.6}
        maxLuminance={16} 
        averageLuminance={0.4} 
        adaptationRate={1} 
      />
    </EffectComposer>
  );
}

export default SmogPostProcessing;
