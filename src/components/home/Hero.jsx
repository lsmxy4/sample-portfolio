import React from "react";
import "./styles/Hero.scss";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import Box from "../animation/Box";
import GatsbyStars from "../animation/GatsbyStars";

const Hero = () => {
  return (
    <div>
      {/* 3D 요소를 렌더링하는 영역 */}
    <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 65 }}>
        <color attach="background" args={["#000000"]} />
        <GatsbyStars />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Box position={[3.1, 0.4, 0]} scale={0.75} />
      </Canvas>

      <div className="inner hero-inner">
        <h1 className="tit">
          <span>developer</span>
          <span>
            back
            {/* <span className="star-spin"><i className="star">✱</i></span> */}
            front
          </span>
          <span>portfolio</span>
        </h1>

        <p className="txt">
          시맨틱 마크업을 통해 웹 접근성, <br />
          웹 표준을 준수하여 차별이 없는 웹을 지향합니다. <br />
          node express - react를 활용한 MERN 프로젝트를 지향하며, <br />
          풀스택 전문가로써 성장과 도전을 지향합니다.
        </p>

        <div className="arrow">⬇</div>
      </div>
    </div>
  );
};

export default Hero;