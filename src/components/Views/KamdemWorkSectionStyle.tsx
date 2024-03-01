import { title, container } from "../jss/KamdemMaterial";
import { createStyles } from "@material-ui/core/styles";

const KamdemWorkStyle = createStyles({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  section: {
    padding: "70px 0"
  },
  title: {
    /* ...title, */
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});

export default KamdemWorkStyle;
