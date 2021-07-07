import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class NavigationService {
	constructor(private router: Router) {}

	navigateTo(path) {
		this.router.navigate([path]);
	}

	goToPins() {
		this.navigateTo("/app/pins");
	}

	goToLogin() {
		this.navigateTo("/app/login");
	}

	goToEditMode() {
		this.navigateTo("/app/add");
	}
}
