import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductItemIndexComponent extends Component {
  @service('cart') cartService;

  @tracked addedToCart = false;

  @action
  handleButtonAddToCart(item, callback) {
    callback();
    this.disabledButton(item);
  }

  @action
  init(item) {
    this.disabledButton(item);
  }

  disabledButton(item) {
    if (this.cartService.items.findBy('id', item.id)) {
      this.addedToCart = true;
    } else {
      this.addedToCart = false;
    }
  }
}
