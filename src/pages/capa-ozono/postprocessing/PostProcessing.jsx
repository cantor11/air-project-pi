import { EffectComposer, Noise, Sepia, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessing = () => {
    return (
        <EffectComposer>
            <Noise
                premultiply
                blendFunction={BlendFunction.ADD}
            />
            <Sepia
                intensity={0.1}
            />
            <Vignette
                offset={0.5}
                darkness={0.5}
                eskil={false}
                blendFunction={BlendFunction.Normal}
            />
        </EffectComposer>
    );
};

export default PostProcessing;