import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { MyLoginPageRoutingModule } from "./MyLoginPage-routing.module";
import { MyLoginPageComponent } from "./MyLoginPage.component";

@NgModule({
    imports: [
        NativeScriptModule,
        MyLoginPageRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        MyLoginPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MyLoginPageModule { }
