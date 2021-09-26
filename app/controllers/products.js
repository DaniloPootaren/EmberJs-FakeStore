import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductsController extends Controller {
  @service('cart') cartService;

  @action
  addItem(item) {
    this.cartService.add(item);
    console.log(this.cartService.items);
  }
}
