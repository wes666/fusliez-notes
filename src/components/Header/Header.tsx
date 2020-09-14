import Input from "components/common/Input";
import React from "react";
import useStyles from "./Header.styles";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.logo}>
          <img src="assets/amongNotes.gif" alt="Notes logo" />
        </div>
        <div className={classes.title}>
          <Input
            placeholder="fuesliez notes title"
            defaultValue="fusliez notes"
            classNames={classes.titleInput}
          />
        </div>
        <div className={classes.logo}>
          <img src="assets/amongNotes.gif" alt="Notes logo" />
        </div>
      </div>
    </React.Fragment>
  );
}