"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var MensagensService = (function () {
    function MensagensService(ngZone) {
        this.ngZone = ngZone;
        this.mensagens = new BehaviorSubject_1.BehaviorSubject([]);
        this._todasAsMensagens = [];
    }
    MensagensService.prototype.getMensagens = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Mensagens';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    MensagensService.prototype.enviarMensagem = function (mensagem) {
        return firebase.push("/Mensagens", mensagem)
            .then(function (result) {
            return 'Mensagem enviada!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    MensagensService.prototype.handleSnapshot = function (data) {
        //empty array, then refill and filter
        this._todasAsMensagens = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                this._todasAsMensagens.push(result);
            }
            this.publishUpdates();
        }
        return this._todasAsMensagens;
    };
    MensagensService.prototype.publishUpdates = function () {
        this.mensagens.next(this._todasAsMensagens.slice());
    };
    MensagensService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    MensagensService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], MensagensService);
    return MensagensService;
}());
exports.MensagensService = MensagensService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVuc2FnZW5zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lbnNhZ2Vuc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsdURBQTBEO0FBQzFELDhDQUE2QztBQUM3Qyx3REFBdUQ7QUFDdkQsbUNBQWlDO0FBS2pDO0lBQ0ksMEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWxDLGNBQVMsR0FBcUMsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELHNCQUFpQixHQUFvQixFQUFFLENBQUM7SUFIWixDQUFDO0lBS3JDLHVDQUFZLEdBQVo7UUFBQSxpQkFhQztRQVpHLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsVUFBQyxRQUFhO1lBQ2hDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUV2QixJQUFJLFlBQVksR0FBRyxVQUFDLFFBQWE7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUVGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsTUFBSSxJQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsUUFBWTtRQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDO2FBQzFDLElBQUksQ0FDRCxVQUFVLE1BQVU7WUFDaEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQy9CLENBQUMsRUFDRCxVQUFVLFlBQWdCO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLElBQVM7UUFDcEIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksTUFBTSxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFLLElBQUksQ0FBQyxpQkFBaUIsU0FBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBckRRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUVtQixhQUFNO09BRHpCLGdCQUFnQixDQXNENUI7SUFBRCx1QkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuXHJcbmltcG9ydCB7IE1lbnNhZ2VtIH0gZnJvbSAnLi4vbW9kZWwvTWVuc2FnZW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVuc2FnZW5zU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKXt9XHJcblxyXG4gICAgbWVuc2FnZW5zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8TWVuc2FnZW0+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gICAgcHJpdmF0ZSBfdG9kYXNBc01lbnNhZ2VuczogQXJyYXk8TWVuc2FnZW0+ID0gW107XHJcblxyXG4gICAgZ2V0TWVuc2FnZW5zKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gJ01lbnNhZ2Vucyc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZW52aWFyTWVuc2FnZW0obWVuc2FnZW06YW55KSB7XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCIvTWVuc2FnZW5zXCIsbWVuc2FnZW0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ01lbnNhZ2VtIGVudmlhZGEhJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApOyBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICAgICAgdGhpcy5fdG9kYXNBc01lbnNhZ2VucyA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2Rhc0FzTWVuc2FnZW5zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2Rhc0FzTWVuc2FnZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1Ymxpc2hVcGRhdGVzKCkge1xyXG4gICAgICAgIHRoaXMubWVuc2FnZW5zLm5leHQoWy4uLnRoaXMuX3RvZGFzQXNNZW5zYWdlbnNdKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxufSJdfQ==