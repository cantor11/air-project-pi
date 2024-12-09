import { Canvas } from '@react-three/fiber';
import Header from "../../components/header/Header";
import { Physics } from '@react-three/rapier';

import ResponseStage from './world/ResponseStage';
import Controls from './controls/Controls';
import Lights from './lights/Ligths';
import Staging from './staging/Staging';
import Questions from './questions/Questions';
import ShowAnswers from './questions/ShowAnswers';
import { Html } from '@react-three/drei';

const Quiz = () => {
    const cameraSettings = {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
      };

    return (
        <>
            <Header/>
            <div className='quiz-container'>
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
            </div>
        </>
    )
}

export default Quiz;