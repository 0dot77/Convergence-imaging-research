import { useState } from "react";
import MainStartDots from "./MainStartDots";
import { switchBackgroundColor } from "../utils/common";
import MainFollowMouse from "./MainFollowMouse";

export default function MainStartBackground() {
  const [mainBackground, setMainBackground] = useState(0);

  const background = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: `${switchBackgroundColor(mainBackground)}`,
  };

  return (
    <div style={background}>
      {mainBackground === 5 ? (
        <>
          <img
            src="/images/main/catch.png"
            alt="catch"
            loading="lazy"
          />
          <MainFollowMouse />
        </>
      ) : null}
      <MainStartDots setMainBackground={setMainBackground} />
    </div>
  );
}
