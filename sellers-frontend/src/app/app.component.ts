import { Component } from '@angular/core';
import Seller from './interfaces/Seller';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sellers-frontend';
}
