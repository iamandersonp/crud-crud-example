import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { TicketRepositoryService } from "src/app/core/services/ticket-repository.service";
import { NavigationService } from "src/app/core/services/navigation.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Ticket } from "../../core/interfaces/ticket";
@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
	isLinear = false;
	formGroup: FormGroup;
	id: string;

	constructor(
		private _formBuilder: FormBuilder,
		private repository: TicketRepositoryService,
		private navigate: NavigationService,
		private snackBar: MatSnackBar,
		public route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = params.get("id");
			return this.id;
		});

		this.formGroup = this._formBuilder.group({
			message: ["", Validators.required],
			answer: "",
		});

		if (this.id != null) {
			this.repository.getTicket(this.id).subscribe((response) => {
				this.formGroup.patchValue({
					message: response.message,
					answer: response.answer,
				});
			});
		}
	}

	public savePin() {
		const model: Ticket = {
			...this.formGroup.value,
		};

		if (this.id == null) {
			this.repository.saveTicket(model).subscribe((response) => {
				this.snackBar
					.open("Your pin is saved, Redirecting ...", "Cool!", {
						duration: 2000,
					})
					.afterDismissed()
					.subscribe(() => {
						this.navigate.goToPins();
					});
			});
		} else {
			this.repository.updateTicket(this.id, model).subscribe((response) => {
				this.snackBar
					.open("Your pin is updated, Redirecting ...", "Cool!", {
						duration: 2000,
					})
					.afterDismissed()
					.subscribe(() => {
						this.navigate.goToPins();
					});
			});
		}
	}
}
