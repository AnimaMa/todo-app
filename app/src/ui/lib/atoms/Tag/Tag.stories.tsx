import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "Atoms/Tag",
  component: Tag,
};

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Default Tag",
};

export const Succes = Template.bind({});

Succes.args = {
  label: "Success Tag",
  variant: "success",
};

export const Waiting = Template.bind({});

Waiting.args = {
  label: "Warning Tag",
  variant: "waiting",
};
