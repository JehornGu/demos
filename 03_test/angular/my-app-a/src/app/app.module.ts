import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpyComponent } from './spy.component';
import { OnChangesComponent } from './on-changes.component';
import { AfterContentComponent } from "./after-content.component";

import { HeroChildComponent } from "./hero-child.component";
import { HeroParentComponent } from "./hero-parent.component";
import { NameChildComponent } from "./name-child.component";
import { NameParentComponent } from "./name-parent.component";
import { VersionChildComponent } from "./version-child.component";
import { VersionParentComponent } from "./version-parent.component";
import { VoterComponent } from "./voter.component";
import { VotetakerComponent } from "./votetaker.component";

import { LoggerService } from './logger.service';

import { SpyDirective } from './spy.directive';


@NgModule({
  declarations: [
    AppComponent,
    SpyComponent,
    SpyDirective,
    OnChangesComponent,
    AfterContentComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
