import { createStyles } from "@material-ui/core/styles";

import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
  } from "../jss/KamdemMaterial";
  
  const KamdemCardHeaderStyle = createStyles ({
    cardHeader: {
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "-30px",
      border: "0",
      marginBottom: "0",
      color: "green"
    },
    cardHeaderPlain: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
  });
  
export default KamdemCardHeaderStyle;
  