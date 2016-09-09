import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

//Imports for loading & configuring the in-meomory APU
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }    from './app.component';
import { routing }         from './app.routing';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent} from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService }     from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  //decorator's declarations array for all components, pipes, and directives we created
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
