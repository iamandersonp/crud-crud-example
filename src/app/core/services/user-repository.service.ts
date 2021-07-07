import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
	providedIn: "root",
})
export class UserRepositoryService {
	endpoint = "/users/";
	constructor(private api: ApiService) {}

	public getUser(id: string) {
		return this.api.get(this.endpoint + id);
	}

	public saveUser(body) {
		return this.api.post(this.endpoint, body);
	}
}
