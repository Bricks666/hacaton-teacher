export interface ChangeProfileInfoRequest {
	readonly userName: string;
	readonly photo: FileList | null;
	readonly email: string;
	readonly organization: string;
	readonly phone: string;
	readonly status: string;
}
