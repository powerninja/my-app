export const App = () => {
  const onClickButton = () => {
    alert("ボタンが押されました");
  };

  return (
    <>
      {console.log("test")}
      <h1>Hello,world</h1>
      <p>test</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
