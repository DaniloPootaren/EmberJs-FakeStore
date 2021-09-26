import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductItemIndexComponent extends Component {
  @service('cart') cartService;

  @tracked addedToCart = false;

  @action
  checkItemInCart(id, callback) {
      callback();
    if (this.cartService.items.findBy('id', id)) {
      this.addedToCart = true;
    } else {
      this.addedToCart = false;
    }
  }

  @action
  dum(){
    console.log('test')
  }
}
