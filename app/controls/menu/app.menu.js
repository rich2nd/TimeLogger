"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AppMenu = (function () {
    function AppMenu(router) {
        this.closeMenu = new core_1.EventEmitter();
        this.parentRouter = router;
    }
    AppMenu.prototype.onHomeMenuSelected = function () {
        this.parentRouter.navigateByUrl('/');
        this.closeMenu.emit('');
    };
    AppMenu.prototype.onMenuSelected = function (navTo) {
        this.parentRouter.navigateByUrl('/' + navTo);
        this.closeMenu.emit('');
    };
    AppMenu.prototype.onCancelMenu = function () {
        this.closeMenu.emit('');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AppMenu.prototype, "closeMenu", void 0);
    AppMenu = __decorate([
        core_1.Component({
            selector: 'app-menu',
            styleUrls: ['./app/controls/menu/app.menu.css'],
            templateUrl: './app/controls/menu/app.menu.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppMenu);
    return AppMenu;
}());
exports.AppMenu = AppMenu;
//# sourceMappingURL=app.menu.js.map