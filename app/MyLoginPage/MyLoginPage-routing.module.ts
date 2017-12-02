import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MyLoginPageComponent } from "./MyLoginPage.component";

const routes: Routes = [
    { path: "", component: MyLoginPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MyLoginPageRoutingModule { }
