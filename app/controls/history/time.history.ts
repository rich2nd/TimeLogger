import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { TimeDetails } from '../../data/TimeDetails';

@Component({
    selector: 'time-history',
    styleUrls: [ './app/controls/history/time.history.css' ],
    templateUrl: './app/controls/history/time.history.html'
})
export class TimeHistoryComponent
{
    entryList: Date[];
    dayNames: string[] = new Array();

    constructor(private timesrv: TimeService) {        
        this.dayNames[0] = 'Sunday';
        this.dayNames[1] = 'Monday';
        this.dayNames[2] = 'Tuesday';
        this.dayNames[3] = 'Wednesday';
        this.dayNames[4] = 'Thursday';
        this.dayNames[5] = 'Friday';
        this.dayNames[6] = 'Saturday';

        this.initialize();
    }

    initialize() {
        this.timesrv.getHistory()
            .subscribe(res => {
                this.entryList = <Date[]>res.json();
            }, (err: any) => console.error(err));
    }

    getDayOfWeek(date) {
        return this.dayNames[(new Date(date)).getDay()];
    }
}
