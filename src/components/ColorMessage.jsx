export const ColoredMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontsize: props.fontsize,
  };
  console.log(contentStyle);

  return <p style={contentStyle}>{props.message}</p>;
};
