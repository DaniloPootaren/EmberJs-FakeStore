import Component from '@glimmer/component';
import $ from 'jquery';

export default class CarouselIndexComponent extends Component {
  carouselItems = [
    {
      url: 'https://source.unsplash.com/2400x1350/?nike',
      heading: 'This is amazing',
      caption: 'test',
    },
    {
      url: 'https://source.unsplash.com/2400x1350/?watches',
      heading: 'This is amazing',
      caption: 'test',
    },
    {
      url: 'https://source.unsplash.com/2400x1350/?selling',
      heading: 'This is amazing',
      caption: 'test',
    },
  ];
  componentDidMount(element) {
    // get carousel-item
    $('.carousel-item').first().addClass('active');

    // launch carousel
    $('.carousel').carousel({
      interval: 10000,
      pause: 'false',
    });
  }
}
