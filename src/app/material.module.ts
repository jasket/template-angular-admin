import { NgModule } from "@angular/core";
import {
  MatGridListModule,
  MatGridList,
  MatGridTile,
  MatToolbarModule,
  MatToolbar
} from "@angular/material";

@NgModule({
  imports: [MatGridListModule, MatToolbarModule],
  exports: [MatGridList, MatGridTile, MatToolbar]
})
export class CustomizeMaterialModule {}
