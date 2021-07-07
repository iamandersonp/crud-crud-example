import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { UserRepositoryService } from "src/app/core/services/user-repository.service";
import { NavigationService } from "src/app/core/services/navigation.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../../core/interfaces/user";
@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
	isLinear = false;
	formGroup: FormGroup;

	constructor(
		private _FormBuilder: FormBuilder,
		private repository: UserRepositoryService,
		private navigate: NavigationService,
		private snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.formGroup = this._FormBuilder.group({
			author: ["", Validators.required],
		});
	}

	public savePin() {
		const model: User = {
			...this.formGroup.value,
		};

		this.repository.saveUser(model).subscribe((response) => {
			this.snackBar
				.open("Login Succesfull, Redirecting ...", "Cool!", {
					duration: 2000,
				})
				.afterDismissed()
				.subscribe(() => {
					localStorage.setItem("author", response.author);
					localStorage.setItem("author_id", response._id);
					this.navigate.goToPins();
				});
		});
	}
}
