import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the search text', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new CustomEvent('input'));
    expect(component.searchForm.controls.searchText.value).toBe('test');
  });

  it('should disable the search button when the form is invalid', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    component.searchForm.controls.searchText.setValue('');
    expect(button.disabled).toBeTrue();
  });

  it('should log to the console', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const consoleSpy = spyOn(console, 'log');
    component.searchForm.controls.searchText.setValue('test');
    fixture.detectChanges();
    button.click();
    expect(consoleSpy).toHaveBeenCalledWith('You searched for: test');
  });
});
