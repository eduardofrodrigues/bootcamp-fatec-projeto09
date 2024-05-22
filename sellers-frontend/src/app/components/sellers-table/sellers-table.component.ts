import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import Seller from '../../interfaces/Seller';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellers-table',
  templateUrl: './sellers-table.component.html',
  styleUrl: './sellers-table.component.css'
})
export class SellersTableComponent {
  constructor(private sellerService: SellerService,
    private modalService: NgbModal
  ) { }

  seller: Seller = {} as Seller;
  sellerToDelete: Seller = {} as Seller;
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

  saveUpdated() {
    this.sellerService.updateSeller(this.seller).subscribe({
      next: () => {
        this.getSellers()
        this.seller = {} as Seller
        this.register = false;
      }
    })
  }

  update(seller: Seller) {
    Object.assign(this.seller, seller)
    this.register = true;
  }

  delete(modal: any, seller: Seller) {
    this.sellerToDelete = seller;
    this.modalService.open(modal).result.then((confirm) => {
      if (confirm) {
        this.sellerService.deleteSeller(seller).subscribe({
          next: () => this.getSellers()
        })
      }
    })
  }

  newSellerRegister() {
    this.register = true;
  }

  cancelSellerRegister() {
    this.seller = {} as Seller;
    this.register = false
  }
}
