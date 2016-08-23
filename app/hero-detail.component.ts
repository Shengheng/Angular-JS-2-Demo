//previous get Hero from parent Component as a input 
//import {Component, Input} from '@angular/core';

import { Hero } from './hero';

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

//nav ==> use URL id to locate the hero and use HeroService to fetch the hero
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

   // hero: Hero;
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
        //routing params is string, convert it to a number using operator + 
            let id = +params['id'];
            this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
            } 
            else
            {
            this.navigated = false;
            this.hero = new Hero();
            }
        });
    }
    save(): void {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedHero: Hero = null): void {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }

    // goBack() {
    //     window.history.back();
    // }
}