import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Toastify from 'toastify-js';

export default class ProductsController extends Controller {
  @service('cart') cartService;

  @action
  addItem(item) {
    this.cartService.add(item);
    Toastify({
      text: `${item.title} added to your basket.`,
      duration: 3000,
      close: true,
      gravity: 'bottom',
      position: 'right',
      backgroundColor: '#20c997',
      stopOnFocus: false,
    }).showToast();
  }
}
