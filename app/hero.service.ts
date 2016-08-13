import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    //getHeroes() {
    //    return HEROES;
    //}

    //promise ==> call us back later when the results are ready <asychronous way for remote serive>
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    //perform a slow response fro remote server
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 5000) // 2 seconds
        );
    }
    //url routing get by id
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }


}
