import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

    //getHeroes() {
    //    return HEROES;
    //}

    //promise ==> call us back later when the results are ready <asychronous way for remote serive>
    // getHeroes() {
    //     return Promise.resolve(HEROES);
    // }

    private heroesUrl = 'app/heroes'; //URL to WEB API

    constructor(private http : Http){}

    getHeroes(): Promise<Hero[]> {
        //http.get return an RxJS observable --> a powerful wat to manage asychronous data flows
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    //then callback function call json method 
                    .then(reponse => reponse.json().data as Hero[])
                    //error handling
                    .catch(this.handleError)
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
    //add new hero
    private post(hero: Hero): Promise<Hero>{
        let hearders = new Headers({
            'content-Type': 'application/json'
        });
        return this.http
                    .post(this.heroesUrl, JSON.stringify(hero), {headers: hearders})
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError);
    }
    // Update existing Hero
    private put(hero: Hero): Promise<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
                .put(url, JSON.stringify(hero), {headers: headers})
                .toPromise()
                .then(() => hero)
                .catch(this.handleError);
    }
    //delete hero
    delete(hero: Hero): Promise<Response>{
        let headers = new Headers();
        headers.append('Content-Type', "application/json");

        let url =  `${this.heroesUrl}/${hero.id}`;

        return this.http
                    .delete(url, {headers: headers})
                    .toPromise()
                    .catch(this.handleError);
    }
    save(hero: Hero): Promise<Hero>{
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }   

   //log error to console
    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
