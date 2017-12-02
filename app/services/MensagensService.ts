import { Injectable, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';

import { Mensagem } from '../model/Mensagem';

@Injectable()
export class MensagensService {
    constructor(private ngZone: NgZone){}

    mensagens: BehaviorSubject<Array<Mensagem>> = new BehaviorSubject([]);
    private _todasAsMensagens: Array<Mensagem> = [];

    getMensagens(): Observable<any> {
        return new Observable((observer: any) => {
            let path = 'Mensagens';
            
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            
            firebase.addValueEventListener(onValueEvent, `/${path}`);
        }).share();              
    }

    enviarMensagem(mensagem:any) {
        return firebase.push("/Mensagens",mensagem)
        .then(
            function (result:any) {
                return 'Mensagem enviada!';
            },
            function (errorMessage:any) {
                console.log(errorMessage);
            }
        ); 
    }

    handleSnapshot(data: any) {
        //empty array, then refill and filter
        this._todasAsMensagens = [];
        if (data) {
            for (let id in data) {        
                let result = (<any>Object).assign({id: id}, data[id]);
                this._todasAsMensagens.push(result);
            }
            this.publishUpdates();
        }
        return this._todasAsMensagens;
    }

    publishUpdates() {
        this.mensagens.next([...this._todasAsMensagens]);
    }

    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    }
}