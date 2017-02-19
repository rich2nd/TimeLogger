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
var time_service_1 = require('../../services/time.service');
var TimeHistoryComponent = (function () {
    function TimeHistoryComponent(timesrv) {
        this.timesrv = timesrv;
        this.dayNames = new Array();
        this.dayNames[0] = 'Sunday';
        this.dayNames[1] = 'Monday';
        this.dayNames[2] = 'Tuesday';
        this.dayNames[3] = 'Wednesday';
        this.dayNames[4] = 'Thursday';
        this.dayNames[5] = 'Friday';
        this.dayNames[6] = 'Saturday';
        this.initialize();
    }
    TimeHistoryComponent.prototype.initialize = function () {
        var _this = this;
        this.timesrv.getHistory()
            .subscribe(function (res) {
            _this.entryList = res.json();
        }, function (err) { return console.error(err); });
    };
    TimeHistoryComponent.prototype.getDayOfWeek = function (date) {
        return this.dayNames[(new Date(date)).getDay()];
    };
    TimeHistoryComponent = __decorate([
        core_1.Component({
            selector: 'time-history',
            styleUrls: ['./app/controls/history/time.history.css'],
            templateUrl: './app/controls/history/time.history.html'
        }), 
        __metadata('design:paramtypes', [time_service_1.TimeService])
    ], TimeHistoryComponent);
    return TimeHistoryComponent;
}());
exports.TimeHistoryComponent = TimeHistoryComponent;
//# sourceMappingURL=time.history.js.map