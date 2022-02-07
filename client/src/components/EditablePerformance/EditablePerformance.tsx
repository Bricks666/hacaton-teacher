import React, { FC } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { usePrepareLink } from "../../hooks";
import { ExtractProps, Manipulation } from "../../interfaces/common";
import { Performance } from "../../ui/Performance";
import { CardHeaderWithEditing } from "../CardHeaderWithEditing";

export const EditablePerformance: FC<
	ExtractProps<typeof Performance, "Header">
> = (props) => {
	const editFormLink = usePrepareLink({
		addQueryParam: {
			[GET_PARAMS.popups]: POPUPS.performance,
			[GET_PARAMS.performanceId]: props.id,
		},
	});

	const manipulations: Manipulation[] = [
		{
			label: "Edit",
			type: "link",
			to: editFormLink,
		},
		{
			label: "Delete",
			type: "button",
			onCLick: console.log,
		},
	];

	return (
		<Performance
			{...props}
			Header={
				<CardHeaderWithEditing
					header={props.header}
					manipulations={manipulations}
				/>
			}
		/>
	);
};
