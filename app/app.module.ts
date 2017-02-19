import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppMenu } from './controls/menu/app.menu';
import { TimeMainComponent } from './controls/main/time.main';
import { TimeHistoryComponent } from './controls/history/time.history';
import { TimeService } from './services/time.service';

const appRoutes: Routes = [
    { path: '', component: TimeMainComponent },
    { path: 'history', component: TimeHistoryComponent },
]

@NgModule({
    imports: [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, AppMenu, TimeMainComponent, TimeHistoryComponent ],
    bootstrap: [ AppComponent ],
    providers: [ TimeService ],
})
export class AppModule { }
