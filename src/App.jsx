import { ColoredMessage } from "./components/ColorMessage";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { useState } from "react";

export const App = () => {
  console.log("レンダリング");
  //Stateの定義
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    alert("ボタンが押されました");
    setNum((p) => p + 1);
  };

  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>Hello,world</h1>
      {/* <ColoredMessage color="blue" message="お元気ですか？" fontsize="60px" /> */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      {/* <ColoredMessage color="pink" message="元気です" fontsize="20px" /> */}
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>

      <CssModules></CssModules>

      <StyledJsx></StyledJsx>
    </>
  );
};
