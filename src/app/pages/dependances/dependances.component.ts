import { Product } from './../../utils/models/product';
import { PanierService } from './../../utils/services/panier.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-dependances',
  templateUrl: './dependances.component.html',
  styleUrls: ['./dependances.component.css']
})
export class DependancesComponent  {

  message = 'heLLO WorLd';
  today = new Date();
  PI = Math.PI;

  products: Product[] = [
    {id: 1, name: 'Mocassins', description: 'Superbes mocassins', price: 120, quantity: 5, image: 'https://www.ma-grande-taille.com/wp-content/uploads/2021/09/mocassins-femmes-automne.jpeg'},
    {id: 2, name: 'Charentaises', description: 'Superbes charentaises', price: 119.99, quantity: 5, image: 'https://www.webastro.net/uploads/imageproxy/2acd75ac00a315f2ef28c15c0f63c8e1.jpeg.3fc42b9c9fdbb4d3ee39d9689ef1ace7.jpeg'},
    {id: 3, name: 'K-ways', description: 'Superbes mocassins', price: 120, quantity: 5, image: 'https://cache.cosmopolitan.fr/data/photo/w1000_ci/1jv/collab-fendi-k-way-impermeables-luxe.jpg'},
    {id: 4, name: 'Bobs', description: 'Superbes mocassins', price: 120, quantity: 5, image: 'https://cdn.shopify.com/s/files/1/0552/5608/8643/articles/Fabriquer_son_bob_chapeau_480x480.jpg?v=1646066323'},
  ]

  constructor(public panierService : PanierService) {}


}
