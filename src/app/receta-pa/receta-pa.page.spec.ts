import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaPaPage } from './receta-pa.page';

describe('RecetaPaPage', () => {
  let component: RecetaPaPage;
  let fixture: ComponentFixture<RecetaPaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaPaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
