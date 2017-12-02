"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AutenticacaoService = (function () {
    function AutenticacaoService() {
        this._logado = false;
    }
    AutenticacaoService.prototype.login = function (usuario) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: usuario.email,
                password: usuario.senha
            }
        });
    };
    AutenticacaoService.prototype.registrar = function (usuario) {
        console.log('usuario');
        console.dir(usuario);
        return firebase.createUser({
            email: usuario.email,
            password: usuario.senha
        });
    };
    Object.defineProperty(AutenticacaoService.prototype, "logado", {
        get: function () {
            return this._logado;
        },
        enumerable: true,
        configurable: true
    });
    AutenticacaoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AutenticacaoService);
    return AutenticacaoService;
}());
exports.AutenticacaoService = AutenticacaoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0ZW50aWNhY2FvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkF1dGVudGljYWNhb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsdURBQTBEO0FBSzFEO0lBR0k7UUFGUSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBR2pDLENBQUM7SUFFRCxtQ0FBSyxHQUFMLFVBQU0sT0FBZ0I7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDeEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSx1Q0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUEzQlEsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7O09BQ0EsbUJBQW1CLENBNEIvQjtJQUFELDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gJy4uL21vZGVsL1VzdWFyaW8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0ZW50aWNhY2FvU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9sb2dhZG86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c3VhcmlvOiBVc3VhcmlvKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgIGVtYWlsOiB1c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB1c3VhcmlvLnNlbmhhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RyYXIodXN1YXJpbzogVXN1YXJpbyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzdWFyaW8nKTtcclxuICAgICAgICBjb25zb2xlLmRpcih1c3VhcmlvKTtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiB1c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdXN1YXJpby5zZW5oYVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb2dhZG8oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2FkbztcclxuICAgIH1cclxufSJdfQ==