import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
};

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fillColor: "fill-indigo-500",
};
