import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaBPPage } from './receta-bp.page';

describe('RecetaBPPage', () => {
  let component: RecetaBPPage;
  let fixture: ComponentFixture<RecetaBPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaBPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
