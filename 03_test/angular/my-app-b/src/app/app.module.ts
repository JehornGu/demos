import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FeatureModule } from "./feature/feature.module";

import { AppRoutingModule } from "./app-routing.module";
import { AttributeDirectivesModule } from "./attribute-directives/attribute-directives.module";
import { StructuralDirectivesModule } from "./structural-directives/structural-directives.module";
import { PipesModule } from "./pipes/pipes.module";

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { NotFoundComponent } from "./not-found.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FeatureModule,
    AttributeDirectivesModule,
    StructuralDirectivesModule,
    PipesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
