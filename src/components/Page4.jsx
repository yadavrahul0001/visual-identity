import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Scene from "./Scene";

const Page4 = () => {
  const container = useRef();
  const sceneContainer = useRef();

  return (
    <>
      <main ref={container}>
        <Canvas
          eventSource={container}
          className="canvas"
          camera={{ position: [0, 0, 5], fov: 50 }}
          pointer-events="none"
        >
          <View track={sceneContainer}>
            <Scene scrollContainer={sceneContainer} />
          </View>
        </Canvas>
        <div className="page4">
          <div className="page4-content" ref={sceneContainer}>
            <h1></h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page4;
