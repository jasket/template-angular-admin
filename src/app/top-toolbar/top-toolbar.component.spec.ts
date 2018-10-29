import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopToolbarComponent } from "./top-toolbar.component";
import { LoggerService } from "../logger.service";

describe("TopToolbarComponent", () => {
  let component: TopToolbarComponent;
  let fixture: ComponentFixture<TopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopToolbarComponent],
      providers: [LoggerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
