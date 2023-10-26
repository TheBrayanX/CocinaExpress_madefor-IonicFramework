import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaAjPage } from './receta-aj.page';

describe('RecetaAjPage', () => {
  let component: RecetaAjPage;
  let fixture: ComponentFixture<RecetaAjPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaAjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
