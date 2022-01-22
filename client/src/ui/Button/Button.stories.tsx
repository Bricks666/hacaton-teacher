import React from "react";

import { Button } from "./Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CommonButton = Template.bind({});
CommonButton.args = { children: "Test" };

export const CommonDisabledButton = Template.bind({});
CommonDisabledButton.args = { ...CommonButton.args, disabled: true };
