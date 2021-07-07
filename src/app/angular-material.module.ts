import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Angular Material Components
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";

@NgModule({
	imports: [
		MatTooltipModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatChipsModule,
		MatButtonToggleModule,
		MatExpansionModule,
		MatStepperModule,
		MatGridListModule,
		MatSidenavModule,
		MatSliderModule,
		CommonModule,
		MatFormFieldModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		MatSlideToggleModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule,
		MatToolbarModule,
		MatDividerModule,
		MatMenuModule,
		MatSnackBarModule,
		MatListModule,
		MatAutocompleteModule,
		MatTabsModule,
		MatBottomSheetModule,
	],
	exports: [
		MatTooltipModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatChipsModule,
		MatButtonToggleModule,
		MatExpansionModule,
		MatStepperModule,
		MatGridListModule,
		MatSidenavModule,
		MatSliderModule,
		CommonModule,
		MatFormFieldModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		MatSlideToggleModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule,
		MatToolbarModule,
		MatDividerModule,
		MatMenuModule,
		MatSnackBarModule,
		MatListModule,
		MatAutocompleteModule,
		MatTabsModule,
		MatBottomSheetModule,
	],
	providers: [
		MatDatepickerModule,
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				backdropClass: "g-transparent-backdrop",
				disableClose: true,
			},
		},
	],
})
export class AngularMaterialModule {}
