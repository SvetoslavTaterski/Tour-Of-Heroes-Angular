import { Component } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../interfaces/HeroInterface';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes: Hero[] = [];

  constructor(private heroService:HeroService) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
