import { ChangeProfileInfoRequest } from "../interfaces/requests";
import { User } from "../models/User";

export const combineUserInfo = (
	currentInfo: User,
	newInfo: ChangeProfileInfoRequest
): User => {
	return {
		id: currentInfo.id,
		userName: newInfo.userName || currentInfo.userName,
		email: newInfo.email || currentInfo.email,
		organization: newInfo.organization || currentInfo.organization,
		photo:
			(newInfo.photo &&
				newInfo.photo[0] &&
				URL.createObjectURL(newInfo.photo[0])) ||
			currentInfo.photo,
		phone: newInfo.phone || currentInfo.phone,
		status: newInfo.status || currentInfo.status,
	};
};
