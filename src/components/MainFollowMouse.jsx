import { useEffect, useState } from "react";

export default function MainFollowMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* 이미지가 마우스를 따라다니도록 스타일링 */}
      <img
        src="/images/main/what.png"
        alt="Follow Mouse"
        style={{
          position: "absolute",
          top: mousePosition.y + 10 + "px", // 마우스 위치로부터 10px 아래
          left: mousePosition.x + 10 + "px", // 마우스 위치로부터 10px 오른쪽
          pointerEvents: "none", // 이미지가 마우스 이벤트를 차단하지 않도록 설정
          transform: "translate(-50%, -50%)", // 이미지의 중앙이 마우스 위치에 오도록 조정
          width: "500px",
          height: "500px",
        }}
      />
    </div>
  );
}
