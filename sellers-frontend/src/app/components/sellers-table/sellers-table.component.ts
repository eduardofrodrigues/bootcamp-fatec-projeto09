import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import Seller from '../../interfaces/Seller';

@Component({
  selector: 'app-sellers-table',
  templateUrl: './sellers-table.component.html',
  styleUrl: './sellers-table.component.css'
})
export class SellersTableComponent {
  constructor(private sellerService: SellerService) { }

  sellers: Seller[] = []

  ngOnInit(): void {
    this.sellerService.getSellers().subscribe({
      next: data => this.sellers = data
    })
  }

}