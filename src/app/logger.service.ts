import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  constructor() {}

  log(text) {
      console.log(text);
  }
}
