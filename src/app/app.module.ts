import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MagCompComponent } from './mag-comp/mag-comp.component';
import { NasCompComponent } from './nas-comp/nas-comp.component';
import { NasSecondComponent } from './nasSecond/nasSecond.component';
import { NasThirdComponent } from './nasThird/nasThird.component';

@NgModule({
  declarations: [
    AppComponent,
    MagCompComponent,
    NasCompComponent,
    NasSecondComponent,
    NasThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
