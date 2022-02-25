import { useEffect, useMemo, useRef, useState } from "react";
import { useGetParam } from ".";
import { GET_PARAMS } from "../config";

const parsePopups = (rawPopups: string | null) => {
	return rawPopups ? rawPopups.split(",") : [];
};

export const usePopups = () => {
	const rawPopups = useGetParam(GET_PARAMS.popups);
	const [mountedPopups, setMountedPopups] = useState<string[]>([]);
	const timeout = useRef<null | NodeJS.Timeout>(null);

	useEffect(() => {
		if (rawPopups) {
			const popups = parsePopups(rawPopups);
			timeout.current && clearTimeout(timeout.current);
			setMountedPopups(popups);
		} else {
			timeout.current = setTimeout(() => setMountedPopups([]), 300);
		}
	}, [rawPopups]);

	useEffect(() => {
		return () => {
			timeout.current && clearTimeout(timeout.current);
		};
	}, []);

	const popups = useMemo(() => parsePopups(rawPopups), [rawPopups]);

	return { mountedPopups, popups };
};
