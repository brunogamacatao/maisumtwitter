import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

import firebase = require("nativescript-plugin-firebase");
import { AutenticacaoService } from "./services/AutenticacaoService";
import { MensagensService } from "./services/MensagensService";

firebase
.init({
    persist: true,
    onAuthStateChanged: (data: any) => { 
    }
}).then(
    function (instance) {
    console.log("firebase.init done");
    },
    function (error) {
    console.log("firebase.init error: " + error);
    }
);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AutenticacaoService,
        MensagensService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
