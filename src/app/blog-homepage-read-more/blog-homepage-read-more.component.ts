import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-homepage-read-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-homepage-read-more.component.html',
  styleUrls: ['./blog-homepage-read-more.component.css'],
})
export class BlogHomepageReadMoreComponent {

  expand: boolean = false;
  anchor: string = 'Read More >';

  constructor() { }

  ngOnInit() { }

  toggleReadMore() {
    this.expand = !this.expand;
    this.anchor = this.expand ? 'Show Less <' : 'Read More >';
  }
}
