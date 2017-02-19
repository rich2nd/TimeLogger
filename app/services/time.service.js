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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var TimeService = (function () {
    function TimeService(http) {
        this.http = http;
        this.timeurl = "http://<url>/timeloggerapi/api/timeapi";
        this.url = this.timeurl.replace("<url>", document.location.hostname);
    }
    TimeService.prototype.getDetails = function () {
        return this.http.get(this.url + "/getdetails")
            .map(function (res) { return res; })
            .catch(TimeService.handleError);
    };
    TimeService.prototype.addTimestamp = function () {
        return this.http.get(this.url + "/addtimestamp")
            .map(function (res) { return res; })
            .catch(TimeService.handleError);
    };
    TimeService.prototype.getHistory = function () {
        return this.http.get(this.url + "/gethistory")
            .map(function (res) { return res; })
            .catch(TimeService.handleError);
    };
    TimeService.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    TimeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TimeService);
    return TimeService;
}());
exports.TimeService = TimeService;
//# sourceMappingURL=time.service.js.map