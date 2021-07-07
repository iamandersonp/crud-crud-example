import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { AngularMaterialModule } from "./angular-material.module";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PinsComponent } from "./components/pins/pins.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ActionsComponent } from "./components/actions/actions.component";
import { FormComponent } from "./components/form/form.component";
import { ApiService } from "./core/services/api.service";
import { TicketRepositoryService } from "./core/services/ticket-repository.service";
import { NavigationService } from "./core/services/navigation.service";
import { PinsService } from "./components/pins/pins.service";

@NgModule({
	declarations: [
		AppComponent,
		PinsComponent,
		LayoutComponent,
		MenuComponent,
		ActionsComponent,
		FormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		LayoutModule,
		ReactiveFormsModule,
		HttpClientModule,
		AngularMaterialModule,
	],
	entryComponents: [ActionsComponent],
	providers: [
		ApiService,
		TicketRepositoryService,
		NavigationService,
		PinsService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
