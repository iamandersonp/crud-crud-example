import { Component } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
	selector: "app-actions",
	templateUrl: "./actions.component.html",
	styleUrls: ["./actions.component.scss"],
})
export class ActionsComponent {
	constructor(private bottomSheetRef: MatBottomSheetRef<ActionsComponent>) {}

	public openLink(event: MouseEvent, action: string): void {
		event.preventDefault();
		this.bottomSheetRef.dismiss();
	}
}
