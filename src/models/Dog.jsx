import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import dogScene from "../assets/3d/dog.glb";

const Dog = ({ isRotating, ...props }) => {
  const ref = useRef();
  // Load the 3D model and its animations
  const {scene} = useGLTF(dogScene);

  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}

export default Dog