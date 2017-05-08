import { TestBed, async } from '@angular/core/testing';
import { MdSidenavModule } from "@angular/material";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [MdSidenavModule, RouterModule.forRoot([]), CoreModule],
      providers:[{
        provide: APP_BASE_HREF,
        useValue: '/'
      }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a site element', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.site')).toBeTruthy();
  }));
});
