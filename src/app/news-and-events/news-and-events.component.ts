import { Component } from '@angular/core';
import { NewsReadMoreComponent } from '../news-read-more/news-read-more.component';

@Component({
  selector: 'app-news-and-events',
  standalone: true,
  imports: [NewsReadMoreComponent],
  templateUrl: './news-and-events.component.html',
  styleUrl: './news-and-events.component.css'
})
export class NewsAndEventsComponent {

}
