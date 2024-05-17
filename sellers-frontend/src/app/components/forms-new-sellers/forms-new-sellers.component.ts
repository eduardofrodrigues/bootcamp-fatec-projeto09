import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Seller from '../../interfaces/Seller';

@Component({
  selector: 'app-forms-new-sellers',
  templateUrl: './forms-new-sellers.component.html',
  styleUrl: './forms-new-sellers.component.css'
})
export class FormsNewSellersComponent implements OnChanges {
  formGroupSeller: FormGroup;

  @Input()
  seller: Seller = {} as Seller;

  @Output()
  saveEmitter = new EventEmitter();

  @Output()
  cancelEmitter = new EventEmitter();

  @Output()
  updateEmitter = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.formGroupSeller = this.formBuilder.group({
      id: { value: null, disabled: true },
      name: ["", [Validators.required, Validators.minLength(5)]],
      salary: ["", [Validators.required, Validators.min(0.1)]],
      bonus: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      gender: ["", [Validators.required]]
    })
  }

  ngOnChanges(): void {
    if (this.seller.id) {
      this.formGroupSeller.setValue(this.seller);
    }
  }

  save() {
    Object.assign(this.seller, this.formGroupSeller.value);
    this.saveEmitter.emit();
  }

  cancel() {
    this.cancelEmitter.emit();
  }

  update() {
    Object.assign(this.seller, this.formGroupSeller.value);
    this.updateEmitter.emit();
  }

  selectedGender(gender1: any, gender2: any) {
    return gender1 && gender2 ? gender1 === gender2 : false;
  }

}
