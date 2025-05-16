import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHostComponent } from './test-host.component';

describe('Test Input/Output', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(titleElement.textContent).toEqual(component.testTitle);
  });

  it('should emit liked event', () => {
    const likeButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    likeButton.click();
    expect(component.isFavorite).toBeTrue();
  });
});
