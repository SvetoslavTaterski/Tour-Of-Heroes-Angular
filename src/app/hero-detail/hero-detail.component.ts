import { Component, Input } from '@angular/core';

import {CommonModule, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../interfaces/HeroInterface';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule,FormsModule, NgFor],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
