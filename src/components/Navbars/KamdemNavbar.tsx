import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// core components
import KamdemHeader from "./KamdemHeader";
import KamdemHeaderLinks from "./KamdemHeaderLinks";
import KamdemGridContainer from "../Grid/KamdemGridContainer";
import KamdemGridItem from "../GridItem/KamdemGridItem";
import KamdemParallax from "../jss/KamdemParallax";
import styles from "../jss/KamdemComponents";

const useStyles = makeStyles(styles);

export default function KamdemNavbar(props: { [x: string]: any; children?: any; className?: any; }) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <KamdemHeader
        brand="Home"
        rightLinks={<KamdemHeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <KamdemParallax image={require("../img/stage_pk.jpg")}>
        <div className={classes.container}>
          <KamdemGridContainer>
            <KamdemGridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Patrick Kamdem</h1>
                <h3 className={classes.subtitle}>Software Developer</h3>
              </div>
            </KamdemGridItem>
          </KamdemGridContainer>
        </div>
      </KamdemParallax>
    </div>
  );
}
