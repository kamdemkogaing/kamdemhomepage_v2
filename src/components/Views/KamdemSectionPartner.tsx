import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import KamdemGridContainer from "../Grid/KamdemGridContainer";
import KamdemGridItem from "../GridItem/KamdemGridItem";
import KamdemButton from "../jss/KamdemButton";
import KamdemCard from "../Card/KamdemCard";
import KamdemCardBody from "../Card/KamdemCardBody";
import KamdemCardFooter from "../Card/KamdemCardFooter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


import styles from "./KamdemSectionPartnerStyle";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <div className={classes.section}>
                <h2 className={classes.title}>Unsere Partners</h2>
                <div>
                    <KamdemGridContainer>
                        <KamdemGridItem xs={12} sm={12} md={4}>
                            <KamdemCard plain>
                                <KamdemGridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    {/* <img src={require('/img/logo192.png')} alt="..." className={imageClasses} /> */}
                                </KamdemGridItem>
                                <h4 className={classes.cardTitle}>
                                    Yane Yamkwe
                                    <br />
                                    <small className={classes.smallTitle}>IT Architect</small>
                                </h4>
                                <KamdemCardBody>
                                    <p className={classes.description}>
                                        Einfache, sichere und bedienbare plattformunabhängige Software für Sie und Ihren Kunden. Wir unterstützen und beraten Sie gerne. Sprechen Sie uns an!
                                    </p>
                                </KamdemCardBody>
                                <KamdemCardFooter className={classes.justifyCenter}>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"} />
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </KamdemButton>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-instagram"} />
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </KamdemButton>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-facebook"} />
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </KamdemButton>
                                </KamdemCardFooter>
                            </KamdemCard>
                        </KamdemGridItem>
                        <KamdemGridItem xs={12} sm={12} md={4}>
                            <KamdemCard plain>
                                <KamdemGridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    {/* <img src={require('/img/logo192.png')} alt="..." className={imageClasses} /> */}
                                </KamdemGridItem>
                                <h4 className={classes.cardTitle}>
                                    Kogaing SARL
                                    <br />
                                    <small className={classes.smallTitle}>Kogaing Brothers SARL</small>
                                </h4>
                                <KamdemCardBody>
                                    <p className={classes.description}>
                                        Apprenez à connaître nos employés. Notre travail est notre passion. Le succès de notre entreprise est dû à nos excellents employés à tous les niveaux. Notre équipe de direction réunit des employés expérimentés dans différents domaines de l'entreprise.
                                    </p>
                                </KamdemCardBody>
                                <KamdemCardFooter className={classes.justifyCenter}>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"} />
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </KamdemButton>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-linkedin"} />
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </KamdemButton>
                                </KamdemCardFooter>
                            </KamdemCard>
                        </KamdemGridItem>
                        <KamdemGridItem xs={12} sm={12} md={4}>
                            <KamdemCard plain>
                                <KamdemGridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                   {/*  <img src={require('/img/logo192.png')} alt="..." className={imageClasses} /> */}
                                </KamdemGridItem>
                                <h4 className={classes.cardTitle}>
                                    C'Clean Services
                                    <br />
                                    <small className={classes.smallTitle}>C'Clean Services SARL</small>
                                </h4>
                                <KamdemCardBody>
                                    <p className={classes.description}>
                                        C'CLEAN est une équipe de jeunes très dynamique et très professionnelle disponible pour l'assainissement de votre environnement.
                                    </p>
                                </KamdemCardBody>
                                <KamdemCardFooter className={classes.justifyCenter}>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                         <i className={classes.socials + " fab fa-twitter"} />
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </KamdemButton>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-instagram"} />
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </KamdemButton>
                                    <KamdemButton
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-facebook"} />
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </KamdemButton>
                                </KamdemCardFooter>
                            </KamdemCard>
                        </KamdemGridItem>
                    </KamdemGridContainer>
                </div>
            </div>
        </div>
    </div>
  );
}
