import { useEffect, useState } from "react";
import { useGetParam } from ".";
import { getParams } from "../config";

const parsePopups = (rawPopups: string) => {
	return rawPopups ? rawPopups.split(",") : [];
};

export const usePopups = () => {
	const rawPopups = useGetParam(getParams.popups);
	const [mountedPopups, setMountedPopups] = useState<string[]>([]);

	useEffect(() => {
		if (rawPopups) {
			const popups = parsePopups(rawPopups);
			setMountedPopups(popups);
		} else {
			setMountedPopups([]);
		}
	}, [rawPopups]);

	useEffect(() => {
		return () => {
			setMountedPopups([]);
		};
	}, []);

	return { mountedPopups };
};
