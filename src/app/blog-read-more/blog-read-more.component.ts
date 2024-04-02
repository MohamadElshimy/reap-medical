import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-read-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-read-more.component.html',
  styleUrls: ['./blog-read-more.component.css'],
})
export class BlogReadMoreComponent {

  expand: boolean = false;
  anchor: string = 'Read More >';

  constructor() { }

  ngOnInit() { }

  toggleReadMore() {
    this.expand = !this.expand;
    this.anchor = this.expand ? 'Show Less <' : 'Read More >';
  }
}
