import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaAPPage } from './receta-ap.page';

describe('RecetaAPPage', () => {
  let component: RecetaAPPage;
  let fixture: ComponentFixture<RecetaAPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaAPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
