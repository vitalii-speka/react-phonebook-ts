import { FC, useState } from "react";
import { Alert, Button } from "react-bootstrap";

import { IPropsAlert } from "interface-ts/IProps";

export const AlertDismissibleExample: FC<IPropsAlert> = ({
  alert,
  variant = "danger",
}) => {
  // { images = [], title }
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        {variant === "danger" ? (
          <>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{alert}</p>
          </>
        ) : (
          <Alert.Heading>{alert}</Alert.Heading>
        )}
      </Alert>
    );
  }
  return (
    <Button variant="outline-danger" onClick={() => setShow(true)}>
      Show Alert
    </Button>
  );
};

/* 
info https://react-bootstrap.netlify.app/docs/components/alerts
variant: [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];
*/
