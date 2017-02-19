import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <div class="title-background">
        <button class="hamburger" (click)="toggleMenu()">
            <span>toggle menu</span>        
        </button>
    </div>
    <div class="title">
        <!-- TIME LOGGER -->
    </div>
    
    <app-menu [@slideInOut]="menuState" (closeMenu)="toggleMenu()"></app-menu>

    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0,0,0)'
            })),
            state('out', style({
                transform: 'translate3d(100%,0,0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]    
})
export class AppComponent {

    menuState:string = 'out';

    parentRouter:Router;

    constructor(router: Router) {
        this.parentRouter = router;
    }
    
    toggleMenu() {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}
