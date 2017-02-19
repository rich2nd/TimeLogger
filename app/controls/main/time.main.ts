import { Component, OnInit } from '@angular/core';
import { TimeService } from '/app/services/time.service';
import { TimeDetails } from '/app/data/TimeDetails';

@Component({
    selector: 'time-main',
    styleUrls: [ './app/controls/main/time.main.css' ],
    templateUrl: './app/controls/main/time.main.html'
})
export class TimeMainComponent implements OnInit
{
    details: TimeDetails;
    enableAddTimestampButton: boolean;

    constructor(private timesrv: TimeService) {
        this.details = new TimeDetails();     
        this.enableAddTimestampButton = true;   
    }

    ngOnInit() {
        this.updateDetails();

        setInterval(() => {
            this.updateDetails();
        }, 60000)
    }

    addTimestamp() {
        this.enableAddTimestampButton = false;

        this.timesrv.addTimestamp()
            .subscribe(res => {
                this.enableAddTimestampButton = true;
                this.updateDetails();
            }, (err: any) => console.error(err));       
    }

    updateDetails() {
        this.timesrv.getDetails()
            .subscribe(res => {
                this.details = <TimeDetails>res.json();
            }, (err: any) => console.error(err));
    }
}
