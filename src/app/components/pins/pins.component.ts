import { Component, ViewEncapsulation } from "@angular/core";
import { TicketRepositoryService } from "src/app/core/services/ticket-repository.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Ticket } from "../../core/interfaces/ticket";

@Component({
	selector: "app-pins",
	templateUrl: "./pins.component.html",
	styleUrls: ["./pins.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class PinsComponent {
	public step = 0;
	public pins = [];
	public selectedPin: Ticket;
	private currentSubscription: Subscription;
	displayedColumns: string[] = [
		"id",
		"author",
		"message",
		"answer",
		"answeredBy",
	];
	dataSource: Ticket[] = [];

	constructor(
		private repository: TicketRepositoryService,
		private snackBar: MatSnackBar,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.repository.getTickets().subscribe((pins) => {
			this.pins = pins.map((pin) => {
				this.dataSource = pins;
				return this.dataSource;
			});
		});
	}

	onRowSelect(rowtData: Ticket) {
		this.selectedPin = rowtData;
		this.router.navigateByUrl(`app/edit/${this.selectedPin._id}`);
	}
}
