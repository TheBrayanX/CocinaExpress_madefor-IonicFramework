import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaCbPage } from './receta-cb.page';

describe('RecetaCbPage', () => {
  let component: RecetaCbPage;
  let fixture: ComponentFixture<RecetaCbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaCbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
