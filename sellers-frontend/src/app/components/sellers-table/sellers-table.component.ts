import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import Seller from '../../interfaces/Seller';

@Component({
  selector: 'app-sellers-table',
  templateUrl: './sellers-table.component.html',
  styleUrl: './sellers-table.component.css'
})
export class SellersTableComponent {
  constructor(private sellerService: SellerService) { }

  seller: Seller = {} as Seller;
  sellers: Seller[] = []
  register = false;

  genderMapping = [
    "Feminino",
    "Masculino",
    "Outros"
  ]

  newSeller() {
    this.register = true;
  }

  ngOnInit(): void {
    this.getSellers()
  }

  getSellers() {
    this.sellerService.getSellers().subscribe({
      next: data => this.sellers = data
    })
  }

  save() {
    this.sellerService.createSeller(this.seller).subscribe({
      next: () => {
        this.getSellers()
        this.register = false;
      }
    })
  }

  newSellerRegister() {
    this.register = true;
  }

  cancelSellerRegister() {
    this.register = false
  }

}
