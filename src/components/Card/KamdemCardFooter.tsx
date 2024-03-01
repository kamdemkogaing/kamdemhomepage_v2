import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./KamdemCardFooterStyle";

const useStyles = makeStyles(styles);

export default function KamdemCardFooter(props: { [x: string]: any; className: any; children: any; }) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

KamdemCardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
