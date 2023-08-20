import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescomplicaComponent } from './descomplica.component';

describe('DescomplicaComponent', () => {
  let component: DescomplicaComponent;
  let fixture: ComponentFixture<DescomplicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescomplicaComponent]
    });
    fixture = TestBed.createComponent(DescomplicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
