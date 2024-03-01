import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

const useStyles = makeStyles(styles);
export default function KamdemGridContainer(props: { [x: string]: any; children?: any; className?: any; }) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

KamdemGridContainer.defaultProps = {
  className: ""
};

KamdemGridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
