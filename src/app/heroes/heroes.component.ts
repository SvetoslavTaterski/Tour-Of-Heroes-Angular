import { Component } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../interfaces/HeroInterface';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes: Hero[] = [];

  constructor(private heroService:HeroService, private messageService: MessageService) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
