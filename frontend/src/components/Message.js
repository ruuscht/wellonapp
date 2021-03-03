import React from "react";
import { Alert } from "react-bootstrap";
const Message = ({ varinat, children }) => {
  return <Alert variant={varinat}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
