import classNames from "classnames";
import React, { FC } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { usePrepareLink } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { SchoolEvent } from "../../models/SchoolEvents";
import { ArrowIcon } from "../../ui/ArrowIcon";
import { Button } from "../../ui/Button";
import { Paragraph } from "../../ui/Paragraph";
import { Picture } from "../../ui/Picture";

import EventCardStyle from "./EventCard.module.css";

interface EventCardProps extends ClassNameProps, SchoolEvent {}

export const EventCard: FC<EventCardProps> = ({
	header,
	id,
	photo,
	className,
	content,
}) => {
	const moreInfoLink = usePrepareLink({
		query: {
			[GET_PARAMS.popups]: POPUPS.event,
			[GET_PARAMS.eventId]: id,
		},
	});

	const containerClasses = classNames(
		EventCardStyle.container,
		{
			[EventCardStyle.only_photo]: !content,
		},
		className
	);

	const contentRootClasses = classNames(EventCardStyle.contentRoot, {
		[EventCardStyle.contentRoot__only_photo]: !content,
	});
	const headerClasses = classNames(EventCardStyle.header, {
		[EventCardStyle.header__only_photo]: !content,
		[EventCardStyle.header__with_content]: content,
	});

	return (
		<div className={containerClasses}>
			<div className={EventCardStyle.photoRoot}>
				<Picture src={photo} alt={header} />
				<Button
					className={EventCardStyle.button}
					to={moreInfoLink}
					type="rectangle"
				>
					view more info
					<ArrowIcon className={EventCardStyle.icon} />
				</Button>
			</div>
			<div className={contentRootClasses}>
				<span className={headerClasses}>{header}</span>
				{content && (
					<Paragraph className={EventCardStyle.content}>{content}</Paragraph>
				)}
			</div>
		</div>
	);
};
