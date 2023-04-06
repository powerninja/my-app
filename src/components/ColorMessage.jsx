export const ColoredMessage = (props) => {
  const { color, children, fontsize } = props;
  const contentStyle = {
    //オブジェクトと変数名が同じなので省略可能
    color,
    fontsize,
  };
  console.log(contentStyle);

  return <p style={contentStyle}>{children}</p>;
};
