import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
};

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Todo name",
  forName: "task",
};
