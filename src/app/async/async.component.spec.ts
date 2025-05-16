import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data with wait for async',  waitForAsync( async() => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('p');
    expect(items.length).toBe(3);
  }));

  it('should get data with fake async', fakeAsync(() => {
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('p');
    expect(items.length).toBe(3);
  }));
});
