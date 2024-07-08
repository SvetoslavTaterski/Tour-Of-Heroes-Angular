import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/HeroInterface';
import { HeroService } from '../services/hero.service';
import {CommonModule, NgFor} from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, NgFor, RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}