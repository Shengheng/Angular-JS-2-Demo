import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
// OnInit Interface => ngOnInit Lifecycle Hook to get heroes when AppComponent activates
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  //DOM tag name
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {

  //DI with constructor 
  //simultaneously private field heroService is created, inject by HeroService
  constructor(private heroService: HeroService, private router: Router) { }

  title = "";
  selectedHero: Hero;
  //public heroes = this.heroService.getHeroes();
  heroes: Hero[];

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  //Angular will call it at right time
  ngOnInit() {
    this.getHeroes();
    //this.getHeroesSlowly();
  }
  //when the Promise resolves successfully, thwn we will have heroes to display
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // add new hero to list 
  add(name : string): void{
    name = name.trim(); 
    if(!name) {return;} //sanitize input
    this.heroService.create(name)
      .then(hero => { 
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  //delete hero in list
  delete(hero: Hero):void{
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !==hero);
        if(this.selectedHero === hero) {this.selectedHero = null;}
      });
  }
  // getHeroesSlowly() {
  //   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  // }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

