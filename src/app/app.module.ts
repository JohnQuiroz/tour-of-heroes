import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { TopBarComponent } from './top-bar/top-bar.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: ProductListComponent },
    // ])
  ],
  declarations: [
    AppComponent,
    // TopBarComponent,
    // ProductListComponent,
    // ProductAlertsComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/