import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const GatsbyStars = () => {
  // 별 전체 그룹에 접근하기 위한 ref
  const starsRef = useRef(null);

  // 매 프레임마다 실행되는 애니메이션
  useFrame((state, delta) => {
    if (!starsRef.current) return;

    const { mouse, camera } = state;

    // 별 배경을 천천히 회전
    starsRef.current.rotation.x += delta * 0.02;
    starsRef.current.rotation.y += delta * 0.04;

    // 마우스 위치에 따라 카메라를 부드럽게 이동
    camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.03;

    // 카메라가 항상 중앙을 바라보게 설정
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100} // 별이 퍼지는 범위
        depth={80} // 별 배경의 깊이감
        count={7000} // 별 개수
        factor={5} // 별 크기
        saturation={0} // 별 색상 채도, 0은 흰색 계열
        fade // 멀리 있는 별이 자연스럽게 흐려짐
        speed={1} // 별 애니메이션 속도
      />
    </group>
  );
};

export default GatsbyStars;
