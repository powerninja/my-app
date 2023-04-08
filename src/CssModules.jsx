import { memo } from "react";
import classes from "./CssModules.module.scss";

export const CssModules = memo(() => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Moduleです。</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
});
