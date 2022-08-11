import React from "react";
import { FormControl } from "../../atoms/FormControl/FormControl";
import { Input, InputProps } from "../../atoms/Input/Input";
import { Label, LabelProps } from "../../atoms/Label/Label";

export interface InputWithLabelProps {
  input: InputProps;
  label: LabelProps;
}

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { input, label } = props;
  return (
    <FormControl className="gap-2">
      <Label {...label} />
      <Input {...input} />
    </FormControl>
  );
};
