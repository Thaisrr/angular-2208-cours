import { PanierService } from './../../utils/services/panier.service';
import { Product } from './../../utils/models/product';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  @Input() product!: Product;

  @Output() modify = new EventEmitter();

  constructor(private panierService: PanierService) {}

  addToBasket() {
    // logique d'ajout au panier

    // modification
    const copy = {...this.product};
    copy.quantity--;

    this.modify.emit(copy);

    this.panierService.addToBasket(copy);
  }

}
