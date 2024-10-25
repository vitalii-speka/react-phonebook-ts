import React, { FC } from "react";
import "../../style/App.css";
import { CSSTransition } from "react-transition-group";
import AlertDismissibleExample from "../AlertDismissibleExample";
import { IPropsAlert } from "interface-ts/IProps";

export const Alert: FC<IPropsAlert> = ({ text, alert, variant }) => {
  return (
    <CSSTransition
      in={text}
      timeout={250}
      classNames="fade-scale"
      unmountOnExit
    >
      <AlertDismissibleExample alert={alert} variant={variant} />
    </CSSTransition>
  );
};


