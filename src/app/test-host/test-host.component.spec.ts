import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestHostComponent } from './test-host.component';

describe('TestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let container: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    container = fixture.nativeElement.querySelector('#copyright');
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

  it('should emit liked event using harness', async () => {
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const likeButton = await loader.getHarness(MatButtonHarness);
    await likeButton.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('should have copyright class', () => {
    expect(container.classList).toContain('copyright');
  });

  it('should have copyright text', () => {
    expect(container.textContent).toContain(new Date().getFullYear().toString());
  });
});
