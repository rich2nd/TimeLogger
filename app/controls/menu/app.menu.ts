import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    styleUrls: [ './app/controls/menu/app.menu.css' ],
    templateUrl: './app/controls/menu/app.menu.html',
})
export class AppMenu {

    parentRouter:Router;

    constructor(router: Router) {
        this.parentRouter = router;
    }

    @Output()
    closeMenu: EventEmitter<string> = new EventEmitter<string>();

    onHomeMenuSelected() {
        this.parentRouter.navigateByUrl('/');
        this.closeMenu.emit('');
    }

    onMenuSelected(navTo:string) {
        this.parentRouter.navigateByUrl('/' + navTo);
        this.closeMenu.emit('');
    }

    onCancelMenu() {
        this.closeMenu.emit('');
    }
}