import { Injectable } from '@angular/core';
//import { HEROES } from './mock-heroes';
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
    private headers = new Headers({"Content-type": "application/json"});
    private heroesUrl = 'app/heroes'; //URL to WEB API
  

    constructor(private http : Http){}

    getHeroes(): Promise<Hero[]> {
        //http.get return an RxJS observable --> a powerful wat to manage asychronous data flows
        return this.http.get(this.heroesUrl)
                    //convert the observable to a Promise
                    .toPromise()
                    //then callback function extract the response data  
                    .then(reponse => reponse.json().data as Hero[])
                    //error handling
                    .catch(this.handleError)
    }
    //perform a slow response fro remote server
    // getHeroesSlowly() {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(() => resolve(HEROES), 5000) // 2 seconds
    //     );
    // }
    //url routing get by id
    getHero(id: number) {
        return this.getHeroes()
                     .then(heroes => heroes.find(hero => hero.id === id));
    }
    //add new hero
    create(name: string): Promise<Hero>{
        return this.http
                    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError);
    }
    // Update existing Hero
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                    .put(url, JSON.stringify(hero), {headers: this.headers})
                    .toPromise()
                    .then(() => hero)
                    .catch(this.handleError);
    }
    //delete hero
    delete(id: number): Promise<void>{
        let url =  `${this.heroesUrl}/${id}`;
        return this.http
                    .delete(url, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
    }
    
    save(hero: Hero): Promise<Hero>{
        if (hero.id) {
            return this.update(hero);
        }
        return this.create(hero);
    }   

   //log error to console - Demo only --> in reality, need more effort for logging errors
    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
