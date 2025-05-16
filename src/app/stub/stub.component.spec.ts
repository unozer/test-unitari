import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { StubService } from '../service/stub.service';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let stubService: Partial<StubService>;

  beforeEach(async () => {
    stubService = {
      isBusy:() => false,
      name: 'Change name to Stub Service'
    }

    await TestBed.configureTestingModule({
      imports: [StubComponent],
      providers: [
        { provide: StubService, useValue: stubService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set message when service avaliable', () => {
    stubService.isBusy = () => false;
    fixture.detectChanges();
    expect(component.msg).toContain('available');
  });

  it('should set message when service busy', () => {
    stubService.isBusy = () => true;
    fixture.detectChanges();
    expect(component.msg).toContain('on mission');
  });

  it('should contain service name', () => {
    stubService.name = 'Test Service';
    fixture.detectChanges();
    expect(component.msg).toContain('Test Service');
  });
});
