"use strict";
var TimeDetails = (function () {
    function TimeDetails() {
    }
    TimeDetails.prototype.construction = function () {
        this.TodayHoursAsString = "";
        this.ThisWeekHoursAsString = "";
        this.LastWeekHoursAsString = "";
        this.LastClockInTodayAsString = "";
        this.LastClockOutTodayAsString = "";
    };
    return TimeDetails;
}());
exports.TimeDetails = TimeDetails;
//# sourceMappingURL=TimeDetails.js.map