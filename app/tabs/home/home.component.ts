import { Component, OnInit } from "@angular/core";
import { MensagensService } from "../../services/MensagensService";
import { Mensagem } from "../../model/Mensagem";
import { alert } from "ui/dialogs";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    mensagem: Mensagem = {autor: 'Fulano', texto: '123 Testando'};
    mensagens: Observable<any>;

    constructor(private mensagensService: MensagensService) {
    }

    ngOnInit(): void {
        this.mensagens = this.mensagensService.getMensagens();
    }
    
    enviarMensagem() {
        this.mensagensService.enviarMensagem(this.mensagem);
        alert({
            title: 'Sucesso',
            message: 'Mensagem enviada com sucesso',
            okButtonText: 'Ok'
        });
    }
}
