import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component:HomepageComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'protocols', component: ProtocolsComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'news-and-events', component: NewsAndEventsComponent },
    { path: 'contact-us', component: ContactUsComponent }
];
