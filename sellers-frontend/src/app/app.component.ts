import { Component } from '@angular/core';
import Seller from './interfaces/Seller';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private sellerService: SellerService) { }

  title = 'sellers-frontend';

  seller: Seller = {} as Seller;
  sellers: Seller[] = []


  ngOnInit(): void {
    this.getSellers()
  }

  save() {
    this.sellerService.createSeller(this.seller).subscribe({
      next: () => this.getSellers()
    })
  }

  getSellers() {
    this.sellerService.getSellers().subscribe({
      next: data => this.sellers = data
    })
  }

}
