import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaCHPage } from './receta-ch.page';

describe('RecetaCHPage', () => {
  let component: RecetaCHPage;
  let fixture: ComponentFixture<RecetaCHPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaCHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
