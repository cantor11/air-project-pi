import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

/**
 * PostProcessing component provides postprocessing effects for a scene using 
 * the Effects from @react-three/postprocessing. It allows to apply visual effects
 * to a scene after it's been rendered, but before it's shown on screen.
 * These effects are used to improve visual quality, realism or add some
 * details for the environment of the scene,
 * in this case, for the Greenhouse Effect section.
 */


const PostProcessing = () => {
  return (
    <EffectComposer>
      <Vignette
        offset={0.6} // vignette offset
        darkness={0.5} // vignette darkness
        eskil={false} // Eskil's vignette technique
        blendFunction={BlendFunction.NORMAL} // blend mode
      />
    </EffectComposer>
  );
};

export default PostProcessing;