import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { type: "text" };
