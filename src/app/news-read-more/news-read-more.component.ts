import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-read-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-read-more.component.html',
  styleUrls: ['./news-read-more.component.css'],
})
export class NewsReadMoreComponent {

  expand: boolean = false;
  anchor: string = 'Read More >';

  constructor() { }

  ngOnInit() { }

  toggleReadMore() {
    this.expand = !this.expand;
    this.anchor = this.expand ? 'Show Less <' : 'Read More >';
  }
}
