import { memo } from "react";

const style = {
  height: "2000px",
  backgroundColor: "wheat",
  padding: "8px",
};

export const Child4 = memo(() => {
  console.log("Child4 レンダリング");
  return (
    <div style={style}>
      <p>Child1</p>
    </div>
  );
});
