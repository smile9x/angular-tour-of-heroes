import { Component } from '@angular/core';
import { OnInit } from '@angular/core'

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>

    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  //hero = 'Windstorm';
  hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
  }
  heroes : Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {

  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
