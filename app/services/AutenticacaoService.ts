import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { Usuario } from '../model/Usuario';

@Injectable()
export class AutenticacaoService {
    private _logado: boolean = false;

    constructor() {
    }

    login(usuario: Usuario): Promise<any> {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
              email: usuario.email,
              password: usuario.senha
            }
        });
    }

    registrar(usuario: Usuario): Promise<any> {
        return firebase.createUser({
            email: usuario.email,
            password: usuario.senha
        });
    }

    get logado(): boolean {
        return this._logado;
    }
}