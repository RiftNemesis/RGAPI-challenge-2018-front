import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeEventDemoComponent } from './resize-event-demo/resize-event-demo.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { BlockComponent } from './block/block.component';
import { ImageComponent } from './image/image.component';
import { StringComponent } from './string/string.component';
import { NumericComponent } from './numeric/numeric.component';

import { DataService } from './data.service';
import { TemplateViewerComponent } from './template-viewer/template-viewer.component';
import { TemplateComponentComponent } from './template-component/template-component.component';
import { ListComponent } from './list/list.component';
import { SummonerComponent } from './summoner/summoner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DateComponent } from './date/date.component';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResizeEventDemoComponent,
    BlockComponent,
    ImageComponent,
    StringComponent,
    NumericComponent,
    TemplateViewerComponent,
    TemplateComponentComponent,
    ListComponent,
    SummonerComponent,
    WelcomeComponent,
    TopBarComponent,
    DateComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
