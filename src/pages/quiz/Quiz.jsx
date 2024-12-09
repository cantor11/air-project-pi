import { Canvas } from '@react-three/fiber';
import Header from "../../components/header/Header";
import { Physics } from '@react-three/rapier';

import ResponseStage from './world/ResponseStage';
import Controls from './controls/Controls';
import Lights from './lights/Ligths';
import Staging from './staging/Staging';
import Questions from './questions/Questions';
import ShowAnswers from './questions/ShowAnswers';
import { Html, KeyboardControls } from '@react-three/drei';
import AnswersFeedback from './questions/answers/AnswersFeedback';
import { useMemo } from 'react';

const Quiz = () => {
    const cameraSettings = {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
    };

    // Keys for keyboard events
    const map = useMemo(
    () => [
        { name: "left", keys: ["ArrowLeft", "KeyA"] },
        { name: "right", keys: ["ArrowRight", "KeyD"] },
        { name: "esc", keys: ["Escape"] },
    ],
    []
    );

    return (
        <>
            <Header/>
            <div className='container'>
                <KeyboardControls map={map}>
                    <Canvas shadows camera={cameraSettings}>
                        <Controls/>
                        <Lights />
                        <Staging />
                        <Questions />

                        <Physics gravity={[0, -9.8, 0]}>
                            <ShowAnswers />
                            <ResponseStage />
                        </Physics >
                    </Canvas>
                </KeyboardControls>
                <AnswersFeedback />
            </div>
        </>
    )
}

export default Quiz;