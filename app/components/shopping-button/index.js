import Component from '@glimmer/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default class ShoppingButtonIndexComponent extends Component {
  @service('cart') cartService;

  items = this.cartService.items;

  componentDidMount(element) {
    const cartButton = $(element);
    let lastScrollTop = 0;

    $(window).on('scroll', function () {
      const st = $(this).scrollTop();
      if (st < lastScrollTop) {
        cartButton.fadeIn();
      } else {
        cartButton.fadeOut();
      }
      lastScrollTop = st;
    });
  }
}
