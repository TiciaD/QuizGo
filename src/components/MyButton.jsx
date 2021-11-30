import React from "react";
import Button from "react-bootstrap/Button";

export const MyButton = (text) => {
  return (
    <div>
      <Button variant="outline-primary">{text}</Button>
    </div>
  );
};
