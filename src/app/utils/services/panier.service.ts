import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
   panier :Product[] = [];

  constructor() {
    const local_panier = localStorage.getItem('panier');
    if(local_panier) {
      this.panier = JSON.parse(local_panier);
    }
  }

  addToBasket(product: Product) {
    this.panier.push(product);
    this.persist();
  }

  removeFromBasket(product: Product) {
    const index = this.panier.indexOf(product);
    this.panier.splice(index, 1);
    this.persist();
  }

  deleteBasket() {
    this.panier = [];
    //localStorage.clear();
    localStorage.removeItem('panier');
  }

  persist() {
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }


}
