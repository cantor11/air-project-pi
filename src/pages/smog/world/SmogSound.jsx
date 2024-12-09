import { PositionalAudio } from "@react-three/drei";
import { forwardRef } from "react";

const SmogSound = forwardRef((props, audioRef) => (
    <group>
        <PositionalAudio
            ref={audioRef}
            loop
            url="/sounds/city-transit.mp3"
            distance={1200}
        />
    </group>
));

export default SmogSound;
