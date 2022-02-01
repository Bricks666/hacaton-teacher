import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Field } from "./Field";

export default {
	title: "Field",
	component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const CommonField = Template.bind({});

CommonField.args = { children: "Text" };
