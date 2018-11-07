import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { CustomizeMaterialModule } from "./material.module";
import { AppComponent } from "./app-component/app.component";
import { LoggerService } from "./logger.service";
import { TopToolbarComponent } from "./top-toolbar/top-toolbar.component";

import "hammerjs";

@NgModule({
  declarations: [AppComponent, TopToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomizeMaterialModule,
    AppRoutingModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
