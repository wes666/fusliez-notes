import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    width: "100%",

    "&+div": {
      marginLeft: "1rem",
    },
  },
  input: {
    backgroundColor: `${theme.backgroundSecondary} !important`,
    fontSize: "2.5rem",
    width: "100%",
    textAlign: "center",
    borderRadius: "0.25rem",
    appearance: "textfield !important",
    "-moz-appearance": "textfield !important",
    color: "#ffffff !important",
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: theme.textSecondary,
    fontSize: "1rem",
  },
}));
