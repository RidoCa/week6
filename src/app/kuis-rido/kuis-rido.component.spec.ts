import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuisRidoComponent } from './kuis-rido.component';

describe('KuisRidoComponent', () => {
  let component: KuisRidoComponent;
  let fixture: ComponentFixture<KuisRidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuisRidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuisRidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
