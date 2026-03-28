import {
  Image,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Text,
} from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";

const CameraScroll = ({ scrollContainer }) => {
  const { camera } = useThree();
  const [isVisible, setIsVisible] = useState(false);
  const targetZ = useRef(camera.position.z);
  const targetRotationZ = useRef(0);
  const smoothSpeed = 0.04; // Adjust for faster/slower smooth movement
  const rotationSpeed = 0.08; // Adjust for faster/slower rotation

  useEffect(() => {
    if (!scrollContainer?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(scrollContainer.current);

    return () => observer.disconnect();
  }, [scrollContainer]);

  useFrame(() => {
    // Smoothly interpolate camera position toward target
    camera.position.z += (targetZ.current - camera.position.z) * smoothSpeed;

    // Smoothly interpolate camera rotation around z axis
    camera.rotation.z +=
      (targetRotationZ.current - camera.rotation.z) * rotationSpeed;
  });

  useEffect(() => {
    if (!isVisible || !scrollContainer?.current) return;

    const handleWheel = (event) => {
      const step = 0.5;
      const rotationStep = 0.05; // Amount to rotate per scroll
      const nextZ = targetZ.current - Math.sign(event.deltaY) * step;
      const clampedZ = Math.min(5, Math.max(-1, nextZ));

      // Allow scrolling when camera reaches endpoints
      const isAtMax = targetZ.current >= 5 && event.deltaY < 0;
      const isAtMin = targetZ.current <= -1 && event.deltaY > 0;

      if (isAtMax || isAtMin) {
        return; // Allow default scroll behavior
      }

      event.preventDefault();
      targetZ.current = clampedZ;
      targetRotationZ.current += Math.sign(event.deltaY) * rotationStep;
    };

    const element = scrollContainer.current;
    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [isVisible, camera, scrollContainer]);

  return null;
};

const Scene = ({ scrollContainer }) => {
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <CameraScroll scrollContainer={scrollContainer} />
      <ambientLight intensity={0.5} />
      <Text
        ref={text1}
        position={[-0.3, 0, 0]}
        fontSize={0.5}
        color="black"
        rotation={[0, MathUtils.degToRad(90), 0]}
      >
        RAVINDRA'S INSTITUTE
      </Text>
      <Text
        ref={text2}
        position={[0.3, 0, 0]}
        fontSize={0.5}
        color="black"
        rotation={[0, MathUtils.degToRad(-90), 0]}
      >
        RAVINDRA.S INSTITUTE 
      </Text>
      <Text
        ref={text3}
        position={[0, 0.2, 0]}
        fontSize={0.5}
        color="black"
        rotation={[
          MathUtils.degToRad(89),
          MathUtils.degToRad(0),
          MathUtils.degToRad(-90),
        ]}
      >
        RAVINDRA.S INSTITUTE
      </Text>
      <Text
        ref={text4}
        position={[0, -0.2, 0]}
        fontSize={0.5}
        color="black"
        rotation={[
          MathUtils.degToRad(-89),
          MathUtils.degToRad(0),
          MathUtils.degToRad(90),
        ]}
      >
        RAVINDRA.S INSTITUTE
      </Text>

      <mesh position={[0, 0, -10]}>
        <Image url="/images/sir.png" transparent={true} /> 
      </mesh>
    </>
  );
};

export default Scene;
