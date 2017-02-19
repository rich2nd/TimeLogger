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
var time_service_1 = require('/app/services/time.service');
var TimeDetails_1 = require('/app/data/TimeDetails');
var TimeMainComponent = (function () {
    function TimeMainComponent(timesrv) {
        this.timesrv = timesrv;
        this.details = new TimeDetails_1.TimeDetails();
        this.enableAddTimestampButton = true;
    }
    TimeMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateDetails();
        setInterval(function () {
            _this.updateDetails();
        }, 60000);
    };
    TimeMainComponent.prototype.addTimestamp = function () {
        var _this = this;
        this.enableAddTimestampButton = false;
        this.timesrv.addTimestamp()
            .subscribe(function (res) {
            _this.enableAddTimestampButton = true;
            _this.updateDetails();
        }, function (err) { return console.error(err); });
    };
    TimeMainComponent.prototype.updateDetails = function () {
        var _this = this;
        this.timesrv.getDetails()
            .subscribe(function (res) {
            _this.details = res.json();
        }, function (err) { return console.error(err); });
    };
    TimeMainComponent = __decorate([
        core_1.Component({
            selector: 'time-main',
            styleUrls: ['./app/controls/main/time.main.css'],
            templateUrl: './app/controls/main/time.main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof time_service_1.TimeService !== 'undefined' && time_service_1.TimeService) === 'function' && _a) || Object])
    ], TimeMainComponent);
    return TimeMainComponent;
    var _a;
}());
exports.TimeMainComponent = TimeMainComponent;
//# sourceMappingURL=time.main.js.map