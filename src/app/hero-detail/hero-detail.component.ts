import { Component, Input } from '@angular/core';

import {CommonModule, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../interfaces/HeroInterface';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule,FormsModule, NgFor],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() hero?: Hero;
}
