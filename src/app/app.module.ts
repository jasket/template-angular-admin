import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import * as Material from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app-component/app.component";
import { LoggerService } from "./logger.service";
import { TopToolbarComponent } from "./top-toolbar/top-toolbar.component";

import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    Material.MatGridList,
    Material.MatGridTile,
    Material.MatToolbar,
    TopToolbarComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
