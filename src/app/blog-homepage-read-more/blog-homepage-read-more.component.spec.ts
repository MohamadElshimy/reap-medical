import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomepageReadMoreComponent } from './blog-homepage-read-more.component';

describe('BlogHomepageReadMoreComponent', () => {
  let component: BlogHomepageReadMoreComponent;
  let fixture: ComponentFixture<BlogHomepageReadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHomepageReadMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogHomepageReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
