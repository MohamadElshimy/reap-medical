import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductLearnMoreComponent } from '../product-learn-more/product-learn-more.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductLearnMoreComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  expand: boolean = false;
  vector: string = 'Learn More';

  constructor() { }

  ngOnInit() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  toggleLearnMore() {
    this.expand = !this.expand;
    this.vector = this.expand ? 'Show Less' : 'Learn More';
  }

}
