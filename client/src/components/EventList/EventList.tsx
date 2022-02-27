import React, { FC } from "react";
import { useEvents, useLoadingEvents } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { List } from "../../ui/List";
import { LoadingIndicator } from "../../ui/LoadingIndicator/LoadingIndicator";
import { LoadingWrapper } from "../../ui/LoadingWrapper";
import { EventCard } from "../EventCard";

import EventListStyle from "./EventList.module.css";

export const EventList: FC<ClassNameProps> = () => {
	const events = useEvents();
	const isLoading = useLoadingEvents();
	return (
		<LoadingWrapper
			isLoading={isLoading}
			LoadingIndicator={<LoadingIndicator />}
		>
			<List
				className={EventListStyle.list}
				items={events}
				Card={EventCard}
				indexedBy="id"
				type="unnumbered"
			/>
		</LoadingWrapper>
	);
};
