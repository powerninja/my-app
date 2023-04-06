export const App = () => {
  const onClickButton = () => {
    alert("ボタンが押されました");
  };

  const contentStyle = {
    color: "blue",
    fontsize: "20px",
  };

  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>Hello,world</h1>
      <p style={contentStyle}>test</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
