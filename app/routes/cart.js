import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CartRoute extends Route {
  @service('cart') cartService;

  model() {
    return this.cartService.items;
  }
}
