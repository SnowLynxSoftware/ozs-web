import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AppNavbarComponent],
    templateUrl: './app.template.html',
    styleUrl: './app.scss',
})
export class AppComponent {}
