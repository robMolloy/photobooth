import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";
import GitHub from "@material-ui/icons/GitHub";

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);

  const classes = makeStyles((theme) => ({
    root: {
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      padding: "0",
    },
    column: {
      height: "100%",
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    container: {},
    // iconsContainer: { position: "absolute", bottom: 0 },
    icon: {
      fontSize: "3em",
      cursor: "pointer",
      color: theme.palette[color].contrastText,
      "&:hover": { fontSize: "3.3em" },
    },
  }))();

  return (
    <Section className={classes.root} color={color}>
      <span className={classes.column}>
        <span></span>
        <span className={classes.container}>
          <Text align="right">Hi I'm</Text>
          <Title size={0}>Rob Molloy</Title>
          <Text>romolo.co.uk</Text>
        </span>
        <span></span>
      </span>
    </Section>
  );
};

export default HomeWelcomeSection;
