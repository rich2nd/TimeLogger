export class TimeDetails {
    TodayHoursAsString: string;
    ThisWeekHoursAsString: string;
    LastWeekHoursAsString: string;
    IsClockedIn: boolean;
    LastClockInTodayAsString: string;
    LastClockOutTodayAsString: string;

    construction() {
        this.TodayHoursAsString = "";
        this.ThisWeekHoursAsString = "";
        this.LastWeekHoursAsString = "";
        this.LastClockInTodayAsString = "";
        this.LastClockOutTodayAsString = "";
    }
}