import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  template: `<ng-container> <h1> {{ 'HELLO' | transloco }}</h1> <h2> {{ 'WORLD' | transloco }}</h2></ng-container>`,
})
export class NxWelcomeComponent {}
