import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSeguidoresComponent } from './listado-seguidores.component';

describe('ListadoSeguidoresComponent', () => {
  let component: ListadoSeguidoresComponent;
  let fixture: ComponentFixture<ListadoSeguidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSeguidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
