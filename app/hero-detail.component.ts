//previous get Hero from parent Component as a input 
//import {Component, Input} from '@angular/core';

import { Hero } from './hero';

import { Component, OnInit } from '@angular/core';

//nav ==> use URL id to locate the hero and use HeroService to fetch the hero
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            //routing params is string, convert it to a number using operator + 
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
    }


}