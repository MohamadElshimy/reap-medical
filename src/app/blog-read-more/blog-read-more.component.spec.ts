import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReadMoreComponent } from './blog-read-more.component';

describe('BlogReadMoreComponent', () => {
  let component: BlogReadMoreComponent;
  let fixture: ComponentFixture<BlogReadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogReadMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
