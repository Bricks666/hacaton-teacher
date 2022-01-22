import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { SectionHeader } from "./SectionHeader";

export default {
	title: "SectionHeader",
	component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
	<SectionHeader {...args} />
);

export const CommonSectionHeader = Template.bind({});
CommonSectionHeader.args = { children: "Test" };
