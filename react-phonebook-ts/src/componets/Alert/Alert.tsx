import React, { FC } from "react";
import "../../style/App.css";
import { CSSTransition } from "react-transition-group";
import { IPropsAlert } from "interface-ts/IProps";
import { AlertDismissibleExampl } from "componets/AlertDismissibleExample";

export const Alert: FC<IPropsAlert> = ({ text, alert, variant }) => {
  return (
    <CSSTransition
      in={text}
      timeout={250}
      classNames="fade-scale"
      unmountOnExit
    >
      <AlertDismissibleExampl alert={alert} variant={variant} />
    </CSSTransition>
  );
};


