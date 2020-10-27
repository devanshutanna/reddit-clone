import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximizedArticleComponent } from './maximized-article.component';

describe('MaximizedArticleComponent', () => {
  let component: MaximizedArticleComponent;
  let fixture: ComponentFixture<MaximizedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximizedArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximizedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
