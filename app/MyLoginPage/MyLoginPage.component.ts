import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { AutenticacaoService } from "../services/AutenticacaoService";
import { alert } from "ui/dialogs";

@Component({
    selector: "MyLoginPage",
    moduleId: module.id,
    templateUrl: "./MyLoginPage.component.html"
})
export class MyLoginPageComponent implements OnInit {
    email: string;
    password: string;

    constructor(private router: RouterExtensions, private autenticacao: AutenticacaoService) {
    }

    onSigninButtonTap(): void {
        this.autenticacao.login({email: this.email, senha: this.password})
        .then(() => {
            this.router.navigate(["/tabs"], { clearHistory: true });
        })
        .catch((erro) => {
            alert({
                title: 'Erro',
                message: 'Não foi possível entrar: ' + erro,
                okButtonText: 'Ok'
            });
        });
    }

    onRegisterButtonTap(): void {
        this.autenticacao.registrar({email: this.email, senha: this.password})
        .then(() => {
            alert({
                title: 'Sucesso',
                message: 'Usuário registrado com sucesso',
                okButtonText: 'Ok'
            });
        })
        .catch((erro) => {
            alert({
                title: 'Erro',
                message: 'Não foi possível registrar: ' + erro,
                okButtonText: 'Ok'
            });
        });
    }

    ngOnInit(): void {
    }

    onLoginWithSocialProviderButtonTap(): void {
    }

    onForgotPasswordTap(): void {
    }
}
