import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ControlerComponent } from './controler/controler.component';
import { ServerItemComponent } from './server-item/server-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlerComponent,
    ServerItemComponent,
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
