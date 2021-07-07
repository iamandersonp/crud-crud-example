import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { PinsComponent } from "./components/pins/pins.component";
import { FormComponent } from "./components/form/form.component";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
	{
		path: "app",
		component: LayoutComponent,
		children: [
			{
				path: "login",
				component: LoginComponent,
			},
			{
				path: "pins",
				component: PinsComponent,
			},
			{
				path: "add",
				component: FormComponent,
			},
			{
				path: "edit/:id",
				component: FormComponent,
			},
			{
				path: "",
				pathMatch: "full",
				redirectTo: "/app/pins",
			},
			{
				path: "**",
				pathMatch: "full",
				redirectTo: "/app/pins",
			},
		],
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "app/pins",
	},
	{
		path: "**",
		pathMatch: "full",
		redirectTo: "app/pins",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
