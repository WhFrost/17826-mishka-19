var myMap = document.getElementById("map__canvas");

if (myMap) {

  ymaps.ready(function () {
    myMap = new ymaps.Map('map__canvas', {
      center: [59.938655, 30.323143],
      zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'ул. Большая Конюшенная, 19/8',
        balloonContent: 'ул. Большая Конюшенная, 19/8'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/icon-map-pin.svg',
          // Размеры метки.
          iconImageSize: [67, 100],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-40, -140]
        }),

    myMap.geoObjects
      .add(myPlacemark)
  });
}

var navMain = document.querySelector('.main-menu');
var navToggle = document.querySelector('.main-menu__toggle');

navMain.classList.remove('main-menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
    navMain.classList.add('main-menu--opened');
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
  }
});
