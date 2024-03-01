
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// core components
import KamdemDropdown from "../jss/KamdemDropdown";
import KamdemButton from "../jss/KamdemButton";
import styles from "./KamdemHeaderLinksStyle";
import { IconButton } from "@material-ui/core";

export default function HeaderLinks(props: {list?:any; 
                                            listItem?:any; 
                                            navLink?:any; 
                                            dropdownLink?:any; 
                                            icons?:any; 
                                            tooltip?:any; 
                                            socialIcons?:any}) {
  const {list, listItem, navLink, dropdownLink, icons, tooltip, socialIcons} = props;

  const useStyles = makeStyles(styles);

  const classes = useStyles();
  
  return (
    <List className={classes[list]} style={{display: "flex"}}>
      <ListItem className={classes[listItem]}>
        <KamdemDropdown
          noLiPadding
          buttonText="Projekte"
          buttonProps={{
            className: classes[navLink],
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href="https://geekflare.com/de/best-javascript-frameworks/"
              target="_blank"
              className={classes[dropdownLink]} rel="noreferrer"
            >
              JavaScript-Frameworks
            </a>,
            <a
              href="https://www.usability.de"
              target="_blank"
              className={classes[dropdownLink]} rel="noreferrer"
            >
              UX Design
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes[listItem]}>
        <KamdemButton
          color="transparent"
          className={classes[navLink]}
        >
          <CloudDownload className={classes[icons]} /> Download
        </KamdemButton>
      </ListItem>
      <ListItem className={classes[listItem]}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
           {/*  <DeleteIcon /> */}
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Folg mir auf Twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes[tooltip] }}
        >
          <KamdemButton
            color="transparent"
            className={classes[navLink]}
          >
            <i className={classes[socialIcons] + " fab fa-twitter"} />
            <FontAwesomeIcon icon={faTwitterSquare} />
            <a href="https://twitter.com/PatrickKamdem7"></a>
          </KamdemButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes[listItem]}>
        <Tooltip
          id="instagram-facebook"
          title="Folg mir auf Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes[tooltip] }}
        >
          <KamdemButton
            color="transparent"
            className={classes[navLink]}
          >
            <i className={classes[socialIcons] + " fab fa-facebook"} />
            <FontAwesomeIcon icon={faFacebookF} />
          </KamdemButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes[listItem]}>
        <Tooltip
          id="instagram-tooltip"
          title="Folg mir auf Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes[tooltip] }}
        >
          <KamdemButton
            color="transparent"
            className={classes[navLink]}
          >
            <i className={classes[socialIcons] + " fab fa-instagram"} />
            <FontAwesomeIcon icon={faInstagramSquare} />
          </KamdemButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes[listItem]}>
        <Tooltip
          id="bitbucket-tooltip"
          title="Bitubket"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes[tooltip] }}
        >
          <KamdemButton
            color="transparent"
            className={classes[navLink]}
          >
            <i className={classes[socialIcons] + " fab fa-instagram"} />
            <FontAwesomeIcon icon={faGithub} />
          </KamdemButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}
