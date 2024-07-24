import { PerspectiveCamera } from "@react-three/drei/core/PerspectiveCamera";
import { useEffect, useRef, useState } from "react";
import { Mesh, Texture, PerspectiveCamera as PerspectiveCameraImpl } from "three";
import { WaterDribblingMaterial } from "./material";
import { extend } from "@react-three/fiber";

extend({ Mesh, Texture, PerspectiveCameraImpl });

type SceneProps = {
  image: Texture;
  opacityMask: Texture;
  normalMap: Texture;
};

export const Scene = ({ image, opacityMask, normalMap }: SceneProps) => {
  const aspectRatio = 3840 / 2160;

  const planeHeight = 1;
  const planeWidth = 1 * aspectRatio;

  const meshRef = useRef<Mesh>(null);
  const cameraRef = useRef<PerspectiveCameraImpl>(null);

  const [meshPosition, setMeshPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const updateMeshPosition = () => {
      if (window.innerWidth < 500) {
        setMeshPosition([0.25, 0, 0]); // Adjust this value as needed
      } else {
        setMeshPosition([0, 0, 0]);
      }
    };

    updateMeshPosition();
    window.addEventListener("resize", updateMeshPosition);

    return () => {
      window.removeEventListener("resize", updateMeshPosition);
    };
  }, []);

  useEffect(() => {
    const resize = () => {
      if (!cameraRef.current) return;
      if (!meshRef.current) return;

      const windowAspectRatio = window.innerWidth / window.innerHeight;
      if (windowAspectRatio > aspectRatio) {
        const zoom = windowAspectRatio / aspectRatio;
        cameraRef.current.zoom = zoom;
      } else {
        screen.width < 500
            ? cameraRef.current.position.setComponent(0, 0.09)
            : cameraRef.current.position.setComponent(0, 0);
      }
    };

    window.addEventListener("resize", resize, false);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [aspectRatio]);

  return (
      <>
        <PerspectiveCamera
            makeDefault
            ref={cameraRef}
            position={[0, 0, 1]}
        />
        <ambientLight intensity={1} position={[0, 0, 0]} color={0xfff} />
        <mesh ref={meshRef} position={meshPosition}>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <WaterDribblingMaterial
              image={image}
              normalMap={normalMap}
              opacityMask={opacityMask}
              animationSpeed={0.17}
              scale={5}
              ratio={0.5}
              ripplestrength={0.04}
              scrollSpeed={0}
              direction={0}
          />
        </mesh>
      </>
  );
};
