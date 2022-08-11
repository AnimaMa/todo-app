import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputWithLabel } from "./InputWithLabel";

export default {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
} as ComponentMeta<typeof InputWithLabel>;

const Template: ComponentStory<typeof InputWithLabel> = (args) => (
  <InputWithLabel {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  input: {
    type: "text",
    id: "taskName",
    name: "Task name",
  },
  label: {
    forName: "taskName",
    label: "Task name",
  },
};
