import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Sports from "@material-ui/icons/Sports";
import Build from "@material-ui/icons/Build";

// core components
import KamdemGridContainer from "../Grid/KamdemGridContainer";
import KamdemGridItem from "../GridItem/KamdemGridItem";

import KamdemTabs from "../Tabs/KamdemTabs";
import TabsStyle from "./KamdemSectionTabsStyle";

const useStyles = makeStyles(TabsStyle);

function KamdemSectionTabs() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <KamdemGridContainer>
              <KamdemGridItem xs={12} sm={12} md={6}>
                <KamdemTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Über mich",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textLeft}>
                          Danke, dass Du auf meine Seite schaust. Ich bin der Patrick und kam vor 15 Jahren nach Deutschland. Geboren bin ich in Zentralafrika, im schönsten Land: Kamerun. Es grenzt an den Atlantischen Ozean durch die Bucht von Bonny. 
                        </p>
                      )
                    },
                    {
                      tabName: "Projekte",
                      tabIcon: Build,
                      tabContent: (
                        <div>
                          <p className={classes.textCenter}>
                            <strong>WAS BIETE ICH AN :</strong>
                          </p>
                          <p className={classes.textLeft}>
                            HTML, CSS, XML/XSLT, XSD-Schema, JavaScript, JQuery, Vue.js, Node.js, React, TypeScript, Ajax, Bootstrap, MySQL, UML, XAMPP, Photoshop, UX.
                          </p>
                        </div>
                      )
                    },
                    {
                      tabName: "Hobbies",
                      tabIcon: Sports,
                      tabContent: (
                        <p className={classes.textLeft}>
                          Meine Kinder, reisen, essen, DVDs anschauen, Kino, Autos, Internet, Computer und Fussball. 
                        </p>
                      )
                    }
                  ]}
                />
              </KamdemGridItem>
              <KamdemGridItem xs={12} sm={12} md={6}>
                <KamdemTabs
                  plainTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Beratung",
                      tabContent: (
                        <p className={classes.textLeft}>
                          Wir beraten und unterstützen Ihr Unternehmen mit neuen Web Technologien, Softwares – online oder vor Ort! 
                        </p>
                      )
                    },
                    {
                      tabName: "Tests",
                      tabContent: (
                        <p className={classes.textLeft}>
                         Ein Softwaretest prüft und bewertet Software auf Erfüllung der für ihren Einsatz definierten Anforderungen und misst ihre Qualität. Die gewonnenen Erkenntnisse werden zur Erkennung und Behebung von Softwarefehlern genutzt. Tests während der Softwareentwicklung dienen dazu, die Software möglichst fehlerfrei in Betrieb zu nehmen.
                        </p>
                      )
                    },
                    {
                      tabName: "Software",
                      tabContent: (
                        <p className={classes.textLeft}>
                          Wir konzipieren und implementieren Software, die auf Ihre Anforderungen und Bedürfnisse zugeschnitten sind. Sowhol einzelne Bausteine als auch vollständige Applikationen programmieren wir für Sie. 
                        </p>
                      )
                    }
                  ]}
                />
              </KamdemGridItem>
            </KamdemGridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KamdemSectionTabs;