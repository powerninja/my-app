const style = {
  height: "2000px",
  backgroundColor: "wheat",
  padding: "8px",
};

export const Child4 = () => {
  console.log("Child4 レンダリング");
  return (
    <div style={style}>
      <p>Child1</p>
    </div>
  );
};
