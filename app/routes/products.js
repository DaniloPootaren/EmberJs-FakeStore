import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ProductsRoute extends Route {
  model() {
    return fetch('https://fakestoreapi.com/products').then(async (response) => {
      const data = response.json();
      const products = await data;
      console.log(products);
      return products;
    });
  }
}
