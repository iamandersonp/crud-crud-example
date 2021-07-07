export interface Ticket {
	_id?: number;
	author?: string;
	message?: string;
	created?: string;
	answer?: string;
	answeredBy?: string;
	answeredAt?: string;
	status: boolean;
}
