export interface RegistrationRequest {
	readonly userName: string;
	readonly phoneNumber: string;
	readonly email: string;
	readonly educationOrg: string;
	readonly password: string;
	readonly repeatPassword: string;
	readonly status: string;
	readonly group: string;
}
