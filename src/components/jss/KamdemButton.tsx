import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import {createStyles, makeStyles} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

// core components
import buttonStyle from "./KamdemButtonStyle";

const makeComponentStyles = makeStyles(() => ({...buttonStyle}));

const KamdemButton = React.forwardRef((props:{color?:any; round?:any; children?:any; fullWidth?:any; disabled?:any; simple?:any; size?:any; block?:any; link?:any; justIcon?:any; className?:any}, ref) => {
  const {color, round, children, fullWidth, disabled, simple, size, block, link, justIcon, className, ...rest} = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    /* [classes[size]]: size,
    [classes[color]]: color, */
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  
  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  );
});

KamdemButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default KamdemButton;
