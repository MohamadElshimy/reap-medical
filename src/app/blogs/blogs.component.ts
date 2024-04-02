import { Component } from '@angular/core';
import { BlogReadMoreComponent } from '../blog-read-more/blog-read-more.component';


@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogReadMoreComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

}
