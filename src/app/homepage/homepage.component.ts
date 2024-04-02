import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogHomepageReadMoreComponent } from '../blog-homepage-read-more/blog-homepage-read-more.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, BlogHomepageReadMoreComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  switch: boolean = false;

  constructor() { }

  ngOnInit() { }

  navigate() {
    this.switch = !this.switch;
  }

}
