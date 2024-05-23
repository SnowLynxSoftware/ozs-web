import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './landing.template.html',
    styleUrl: './landing.scss',
})
export class AppLandingComponent {}
