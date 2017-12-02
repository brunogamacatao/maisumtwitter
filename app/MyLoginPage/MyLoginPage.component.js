"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AutenticacaoService_1 = require("../services/AutenticacaoService");
var dialogs_1 = require("ui/dialogs");
var MyLoginPageComponent = (function () {
    function MyLoginPageComponent(router, autenticacao) {
        this.router = router;
        this.autenticacao = autenticacao;
    }
    MyLoginPageComponent.prototype.onSigninButtonTap = function () {
        var _this = this;
        this.autenticacao.login({ email: this.email, senha: this.password })
            .then(function () {
            _this.router.navigate(["/tabs"], { clearHistory: true });
        })
            .catch(function (erro) {
            dialogs_1.alert({
                title: 'Erro',
                message: 'Não foi possível entrar: ' + erro,
                okButtonText: 'Ok'
            });
        });
    };
    MyLoginPageComponent.prototype.onRegisterButtonTap = function () {
        this.autenticacao.registrar({ email: this.email, senha: this.password })
            .then(function () {
            dialogs_1.alert({
                title: 'Sucesso',
                message: 'Usuário registrado com sucesso',
                okButtonText: 'Ok'
            });
        })
            .catch(function (erro) {
            dialogs_1.alert({
                title: 'Erro',
                message: 'Não foi possível registrar: ' + erro,
                okButtonText: 'Ok'
            });
        });
    };
    MyLoginPageComponent.prototype.ngOnInit = function () {
    };
    MyLoginPageComponent.prototype.onLoginWithSocialProviderButtonTap = function () {
    };
    MyLoginPageComponent.prototype.onForgotPasswordTap = function () {
    };
    MyLoginPageComponent = __decorate([
        core_1.Component({
            selector: "MyLoginPage",
            moduleId: module.id,
            templateUrl: "./MyLoginPage.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, AutenticacaoService_1.AutenticacaoService])
    ], MyLoginPageComponent);
    return MyLoginPageComponent;
}());
exports.MyLoginPageComponent = MyLoginPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlMb2dpblBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTXlMb2dpblBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCx1RUFBc0U7QUFDdEUsc0NBQW1DO0FBT25DO0lBSUksOEJBQW9CLE1BQXdCLEVBQVUsWUFBaUM7UUFBbkUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDdkYsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2FBQ2pFLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxJQUFJO1lBQ1IsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSwyQkFBMkIsR0FBRyxJQUFJO2dCQUMzQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrREFBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDckUsSUFBSSxDQUFDO1lBQ0YsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxTQUFTO2dCQUNoQixPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxJQUFJO1lBQ1IsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSw4QkFBOEIsR0FBRyxJQUFJO2dCQUM5QyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGlFQUFrQyxHQUFsQztJQUNBLENBQUM7SUFFRCxrREFBbUIsR0FBbkI7SUFDQSxDQUFDO0lBOUNRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FLOEIseUJBQWdCLEVBQXdCLHlDQUFtQjtPQUo5RSxvQkFBb0IsQ0ErQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXV0ZW50aWNhY2FvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9BdXRlbnRpY2FjYW9TZXJ2aWNlXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk15TG9naW5QYWdlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL015TG9naW5QYWdlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTXlMb2dpblBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGF1dGVudGljYWNhbzogQXV0ZW50aWNhY2FvU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGVudGljYWNhby5sb2dpbih7ZW1haWw6IHRoaXMuZW1haWwsIHNlbmhhOiB0aGlzLnBhc3N3b3JkfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RhYnNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm8pID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOw6NvIGZvaSBwb3Nzw612ZWwgZW50cmFyOiAnICsgZXJybyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPaydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZ2lzdGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGVudGljYWNhby5yZWdpc3RyYXIoe2VtYWlsOiB0aGlzLmVtYWlsLCBzZW5oYTogdGhpcy5wYXNzd29yZH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Vzc28nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc3XDoXJpbyByZWdpc3RyYWRvIGNvbSBzdWNlc3NvJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPaydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm8pID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOw6NvIGZvaSBwb3Nzw612ZWwgcmVnaXN0cmFyOiAnICsgZXJybyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPaydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aFNvY2lhbFByb3ZpZGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIH1cblxuICAgIG9uRm9yZ290UGFzc3dvcmRUYXAoKTogdm9pZCB7XG4gICAgfVxufVxuIl19