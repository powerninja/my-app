import { ColoredMessage } from "./components/ColorMessage";

export const App = () => {
  const onClickButton = () => {
    alert("ボタンが押されました");
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
    </>
  );
};
