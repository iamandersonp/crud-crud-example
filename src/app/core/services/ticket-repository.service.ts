import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
	providedIn: "root",
})
export class TicketRepositoryService {
	endpoint = "/tickets/";
	constructor(private api: ApiService) {}

	public getTickets() {
		return this.api.get("/tickets");
	}

	public getTicket(id: string) {
		return this.api.get(this.endpoint + id);
	}

	public saveTicket(body) {
		return this.api.post(this.endpoint, body);
	}

	public updatePin(id, body) {
		return this.api.put(this.endpoint + id, body);
	}
}
