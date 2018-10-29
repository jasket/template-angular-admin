import { Component, OnInit } from '@angular/core';
import { LoggerService } from "../logger.service";

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
      this.logger.log("asdasd");
  }

}
