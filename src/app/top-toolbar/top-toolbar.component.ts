import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
  selector: "app-top-toolbar",
  templateUrl: "./top-toolbar.component.html",
  styleUrls: ["./top-toolbar.component.scss"]
})
export class TopToolbarComponent implements OnInit {
  title = 'Toolbar';

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log("application initialize complete");
  }
}
