import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons

// core components
import KamdemGridContainer from "../Grid/KamdemGridContainer";
import KamdemGridItem from "../GridItem/KamdemGridItem";
import KamdemCustomInput from "../jss/KamdemCustomInput";
import KamdemButton from "../jss/KamdemButton";

import styles from "./KamdemWorkSectionStyle";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <div className={classes.section}>
                <KamdemGridContainer justify="center">
                    <KamdemGridItem cs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Mit uns arbeiten</h2>
                        <h5 className={classes.description}>
                            Kontaktieren Sie uns für weitere Zusammenarbeit. Wir werden uns in ein paar Minuten bei Ihnen melden.
                        </h5>
                        <form>
                            <KamdemGridContainer>
                                <KamdemGridItem xs={12} sm={12} md={6}>
                                    <KamdemCustomInput
                                    labelText="Name"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    />
                                </KamdemGridItem>
                                <KamdemGridItem xs={12} sm={12} md={6}>
                                    <KamdemCustomInput
                                    labelText="Email"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    />
                                </KamdemGridItem>
                                <KamdemCustomInput
                                    labelText="Nachricht"
                                    id="message"
                                    formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea
                                    }}
                                    inputProps={{
                                    multiline: true,
                                    rows: 5
                                    }}
                                />
                                <KamdemGridItem xs={12} sm={12} md={4}>
                                    <KamdemButton color="primary">Senden</KamdemButton>
                                </KamdemGridItem>
                            </KamdemGridContainer>
                        </form>
                    </KamdemGridItem>
                </KamdemGridContainer>
            </div>
        </div>
    </div>              
  );
}
