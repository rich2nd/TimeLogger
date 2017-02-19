import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'
import { TimeMainComponent } from './controls/main/time.main'
import { TimeService } from './services/time.service'

@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, TimeMainComponent ],
    bootstrap: [ AppComponent ],
    providers: [ TimeService ],
})
export class AppModule { }
