import React from "react";
import { FormControl } from "../../atoms/FormControl/FormControl";
import { Input, InputProps } from "../../atoms/Input/Input";
import { Label, LabelProps } from "../../atoms/Label/Label";

export interface InputWithLabelProps {
  input: InputProps;
  label: LabelProps;
  formControlClassName?: string;
}

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { input, label, formControlClassName } = props;
  return (
    <FormControl className={formControlClassName}>
      <Label {...label} />
      <Input {...input} />
    </FormControl>
  );
};
