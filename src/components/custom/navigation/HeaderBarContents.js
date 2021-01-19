import React from "react";

import { makeStyles } from "@material-ui/styles";

import Switch from "@material-ui/core/Switch";
import Logo from "../../custom/media/Logo";
import Title from "../../generic/text/Title";
import Slider from "@material-ui/core/Slider";

// const headerHeight

const HeaderBarContents = (props = {}) => {
  let color;
  ({ color = "mono", ...props } = props);

  const classes = makeStyles((theme) => ({
    logoContainer: {
      maxHeight: "100px",
      maxWidth: "65%",
      color: theme.palette[color].contrastText,
    },
    logoSettingsContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding: `${theme.spacing(1)}px 0`,
    },
  }))();
  return (
    <>
      <div className={classes.logoContainer}>
        <Title color="mono">Photobooth</Title>
      </div>

      <div className={classes.spacer}></div>

      <span className={classes.logoSettingsContainer}></span>
    </>
  );
};

export default HeaderBarContents;
