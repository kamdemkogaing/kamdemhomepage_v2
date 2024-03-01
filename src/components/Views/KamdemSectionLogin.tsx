import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import LockIcon from '@material-ui/icons/Lock';
import {Link, LinkProps} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

// core components
import KamdemGridContainer from "../Grid/KamdemGridContainer";
import KamdemGridItem from "../GridItem/KamdemGridItem";

import KamdemCard from "../Card/KamdemCard";
import KamdemCardBody from "../Card/KamdemCardBody";
import KamdemCardHeader from "../Card/KamdemCardHeader";
import KamdemCardFooter from "../Card/KamdemCardFooter";

import KamdemButton from "../jss/KamdemButton";
import KamdemCustomInput from "../jss/KamdemCustomInput";

import styles from "./KamdemSectionLoginStyle";

const useStyles = makeStyles(styles);

export default function KamdemSectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <KamdemGridContainer justify="center">
          <KamdemGridItem xs={12} sm={12} md={4}>
            <KamdemCard>
              <form className={classes.form}>
                <KamdemCardHeader color="primary" className={classes.cardHeader}>
                  <h4>Mich kontaktieren</h4>
                  <div className={classes.socialLine}>
                    <KamdemButton
                      justIcon
                      color="transparent"
                    >
                      <i className={classes.socialIcons + " fab fa-twitter"} />
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </KamdemButton>
                    <KamdemButton
                      justIcon
                      color="transparent"
                      /* onClick={e => e.preventDefault()} */
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                      <FontAwesomeIcon icon={faFacebookF} />
                    </KamdemButton>
                    <KamdemButton
                      justIcon
                      color="transparent"
                      /* onClick={e => e.preventDefault()} */
                    >
                      <i className={classes.socialIcons + " fab fa-google-plus-g"} />
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </KamdemButton>
                  </div>
                </KamdemCardHeader>
                <p className={classes.divider}>Oder über das Kontaktformular</p>
                <KamdemCardBody>
                  <KamdemCustomInput
                    labelText="Vorname und Nachname..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <KamdemCustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <KamdemCustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </KamdemCardBody>
                <KamdemCardFooter className={classes.cardFooter}>
                  <KamdemButton simple color="primary" size="lg">
                    Senden
                  </KamdemButton>
                </KamdemCardFooter> 
              </form>
            </KamdemCard>
          </KamdemGridItem>
        </KamdemGridContainer>
      </div>
    </div>
  );
}
