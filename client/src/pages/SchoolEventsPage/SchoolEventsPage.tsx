import React, { FC } from "react";
import { EventList } from "../../components/EventList";
import { ClassNameProps } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import SchoolEventsPageStyle from "./SchoolEventsPage.module.css";

export const SchoolEventsPage: FC<ClassNameProps> = ({ className }) => {
	return (
		<main className={className}>
			<ContentWrapper className={SchoolEventsPageStyle.wrapper}>
				<SectionHeader align="center" label="School events" />
				<EventList />
			</ContentWrapper>
		</main>
	);
};
