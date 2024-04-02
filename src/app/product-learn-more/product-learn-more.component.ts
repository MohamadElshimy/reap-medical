import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-learn-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-learn-more.component.html',
  styleUrl: './product-learn-more.component.css'
})
export class ProductLearnMoreComponent {

  expand: boolean = false;
  vector: string = 'Learn More';

  constructor() { }

  ngOnInit() { }

  toggleLearnMore() {
    this.expand = !this.expand;
    this.vector = this.expand ? 'Show Less' : 'Learn More';
  }
}
