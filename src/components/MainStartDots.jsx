import { useState } from "react";

export default function MainStartDots() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <h1
      className=".entrance-text"
      onClick={handleClick}
    >
      ...
    </h1>
  );
}
