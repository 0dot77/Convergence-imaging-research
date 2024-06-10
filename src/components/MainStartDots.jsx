import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "astro/virtual-modules/transitions-router.js";

export default function MainStartDots({ setMainBackground }) {
  const [count, setCount] = useState(1);

  const goToMiddleSchool = () => {
    navigate("/middleSchool");
  };

  const handleClick = () => {
    if (count < 6) {
      setCount(count + 1);
      setMainBackground(count);
    } else if (count === 6) {
      // 다른 페이지로 이동
      goToMiddleSchool();
    }
  };

  const changeDotSize = {
    color: "white",
    fontSize: `${count * 2}rem`,
    cursor: "grab",
    zIndex: 1,
  };
  return (
    <h1
      onClick={handleClick}
      style={changeDotSize}
    >
      {count === 6 ? (
        <>
          {[1, 2, 3].map((_) => {
            return (
              <FontAwesomeIcon
                key={_}
                icon={faLeaf}
                size="1x"
                color="#B15300"
              />
            );
          })}
        </>
      ) : (
        "..."
      )}
    </h1>
  );
}
