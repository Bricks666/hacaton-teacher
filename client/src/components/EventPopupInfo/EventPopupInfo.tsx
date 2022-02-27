import React, { CSSProperties, FC } from "react";
import dayjs from "dayjs";
import { GET_PARAMS } from "../../config";
import { useGetParam } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { useEvent } from "./useEvent";
import { SectionHeader } from "../../ui/SectionHeader";
import { Paragraph } from "../../ui/Paragraph";
import { Datalist } from "../../ui/Datalist";
import { DataTerm } from "../../ui/DataTerm";
import { DataDescription } from "../../ui/DataDescription";

import EventPopupInfoStyle from "./EventPopupInfo.module.css";

export const EventPopupInfo: FC<ClassNameProps> = ({ className }) => {
	const id = useGetParam(GET_PARAMS.eventId);
	const event = useEvent(id);

	if (!event) {
		return null;
	}

	const background: CSSProperties = {
		backgroundImage: `url(${event?.photo})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};
	return (
		<div className={EventPopupInfoStyle.container} style={background}>
			<SectionHeader
				className={EventPopupInfoStyle.header}
				label={event.header}
				align="center"
			/>
			<Paragraph className={EventPopupInfoStyle.content}>
				{event.content}
			</Paragraph>
			<Datalist className={EventPopupInfoStyle.datalist}>
				<div className={EventPopupInfoStyle.pair}>
					<DataTerm className={EventPopupInfoStyle.term}>Address: </DataTerm>
					<DataDescription className={EventPopupInfoStyle.description}>
						{event.place}
					</DataDescription>
				</div>
				<div className={EventPopupInfoStyle.pair}>
					<DataTerm className={EventPopupInfoStyle.term}>Date: </DataTerm>
					<DataDescription className={EventPopupInfoStyle.description}>
						<time dateTime={event.date}>
							{dayjs(event.date).format("HH:MM, D MMM YY")}
						</time>
					</DataDescription>
				</div>
			</Datalist>
		</div>
	);
};
