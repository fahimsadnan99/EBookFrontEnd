import React from "react";

import { Input,FormFeedback, Label, FormGroup } from "reactstrap";

const CustomInput = ({ field, form: { touched, errors }, label, id, ...props }) => {
  return (
    <FormGroup style={{width : "250px",marginLeft : "80px"}}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...props} {...field} />
      {touched[field.name] && errors[field.name] && !props.disabled ? (
        <FormFeedback type="invalid" className="d-inline invalid-feedback">{errors[field.name]}</FormFeedback>
      ) : null}
    </FormGroup>
  );
};

export default CustomInput;
