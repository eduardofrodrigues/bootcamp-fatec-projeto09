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

  @Input()
  sellers: Seller[] = []

  @Output()
  newSellerEmitter = new EventEmitter();

  genderMapping = [
    "Feminino",
    "Masculino",
    "Outros"
  ]

  newSeller() {
    this.newSellerEmitter.emit();
  }

}
