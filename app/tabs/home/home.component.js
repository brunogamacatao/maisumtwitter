"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MensagensService_1 = require("../../services/MensagensService");
var dialogs_1 = require("ui/dialogs");
var HomeComponent = (function () {
    function HomeComponent(mensagensService) {
        this.mensagensService = mensagensService;
        this.mensagem = { autor: 'Fulano', texto: '123 Testando' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.mensagens = this.mensagensService.getMensagens();
    };
    HomeComponent.prototype.enviarMensagem = function () {
        this.mensagensService.enviarMensagem(this.mensagem);
        dialogs_1.alert({
            title: 'Sucesso',
            message: 'Mensagem enviada com sucesso',
            okButtonText: 'Ok'
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [MensagensService_1.MensagensService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxvRUFBbUU7QUFFbkUsc0NBQW1DO0FBUW5DO0lBSUksdUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHRELGFBQVEsR0FBYSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDO0lBSTlELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxlQUFLLENBQUM7WUFDRixLQUFLLEVBQUUsU0FBUztZQUNoQixPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FLd0MsbUNBQWdCO09BSjdDLGFBQWEsQ0FtQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lbnNhZ2Vuc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvTWVuc2FnZW5zU2VydmljZVwiO1xuaW1wb3J0IHsgTWVuc2FnZW0gfSBmcm9tIFwiLi4vLi4vbW9kZWwvTWVuc2FnZW1cIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBtZW5zYWdlbTogTWVuc2FnZW0gPSB7YXV0b3I6ICdGdWxhbm8nLCB0ZXh0bzogJzEyMyBUZXN0YW5kbyd9O1xuICAgIG1lbnNhZ2VuczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZW5zYWdlbnNTZXJ2aWNlOiBNZW5zYWdlbnNTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVuc2FnZW5zID0gdGhpcy5tZW5zYWdlbnNTZXJ2aWNlLmdldE1lbnNhZ2VucygpO1xuICAgIH1cbiAgICBcbiAgICBlbnZpYXJNZW5zYWdlbSgpIHtcbiAgICAgICAgdGhpcy5tZW5zYWdlbnNTZXJ2aWNlLmVudmlhck1lbnNhZ2VtKHRoaXMubWVuc2FnZW0pO1xuICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Vzc28nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ01lbnNhZ2VtIGVudmlhZGEgY29tIHN1Y2Vzc28nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT2snXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==