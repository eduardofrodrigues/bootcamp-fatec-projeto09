import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Seller from '../../interfaces/Seller';

@Component({
  selector: 'app-forms-new-sellers',
  templateUrl: './forms-new-sellers.component.html',
  styleUrl: './forms-new-sellers.component.css'
})
export class FormsNewSellersComponent {
  formGroupSeller: FormGroup;

  @Input()
  seller: Seller = {} as Seller;

  @Output()
  saveEmitter = new EventEmitter();

  @Output()
  cancelEmitter = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.formGroupSeller = this.formBuilder.group({
      id: [""],
      name: ["", [Validators.required, Validators.minLength(3)]],
      salary: ["", [Validators.required]],
      bonus: ["", [Validators.required]],
      gender: ["", [Validators.required]]
    })
  }

  save() {
    Object.assign(this.seller, this.formGroupSeller.value);
    this.saveEmitter.emit();
  }

  cancel() {
    this.cancelEmitter.emit();
  }

}
