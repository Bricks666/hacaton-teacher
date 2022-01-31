import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

export default { title: "Input", component: Input } as ComponentMeta<
	typeof Input
>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const CommonInput = Template.bind({});
CommonInput.args = { children: "Text" };
