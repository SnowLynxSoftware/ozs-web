import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './navbar.template.html',
    styleUrl: './navbar.scss',
})
export class AppNavbarComponent {}
