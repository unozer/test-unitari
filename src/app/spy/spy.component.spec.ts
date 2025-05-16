import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';
import { Title } from '@angular/platform-browser';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  const titleSpy = jasmine.createSpyObj('Title', ['setTitle', 'getTitle']);
  titleSpy.getTitle.and.returnValue('Pippo');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpyComponent],
      providers: [
        { provide: Title, useValue: titleSpy }
      ] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the title', () => {
    expect(fixture.nativeElement.textContent).toContain('Pippo');
  });
});
