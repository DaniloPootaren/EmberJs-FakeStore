import Component from '@glimmer/component';
import $ from 'jquery';

export default class ShoppingButtonIndexComponent extends Component {
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
