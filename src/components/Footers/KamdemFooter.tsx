/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from "./KamdemFooterStyle";

const useStyles = makeStyles(styles);

export default function KamdemFooter(props: { whiteFont: any; }) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.kogaing.com/"
                className={classes.block}
                target="_blank"
              >
                Kogaing SARL
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://yanson.de/"
                className={classes.block}
                target="_blank"
              >
                Yan'son IT
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://www.cclean-services.com/"
                className={classes.block}
                target="_blank"
              >
                CClean Services
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://www.pouahom-bw.de/"
                className={classes.block}
                target="_blank"
              >
                Les Bahams
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {2024 + new Date().getFullYear()} , copyright {" "}
          <FavoriteIcon className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            KAMDEM
          </a>{" "}
          react technology
        </div>
      </div>
    </footer>
  );
}

KamdemFooter.propTypes = {
  whiteFont: PropTypes.bool
};
