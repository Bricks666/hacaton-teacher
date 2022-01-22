import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Checkbox } from "./Checkbox";

export default {
	title: "Checkbox",
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const CommonCheckbox = Template.bind({});
CommonCheckbox.args = { label: "Text" };
