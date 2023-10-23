ymaps.ready(function () {
    var myMap = new ymaps.Map("YMapsID", {
        center: [55.75846306898368,37.601079499999905],
        zoom: 17
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'Шоурум №4 Леонтьевский переулок, дом 5, строение 1'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/PNG/Mapmarker.png',
        // Размеры метки.
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-5, -38]
    });
myMap.geoObjects
    .add(myPlacemark)
});

ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
        center: [55.75846306898368,37.601079499999905],
        zoom: 17
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'Шоурум №4 Леонтьевский переулок, дом 5, строение 1'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/PNG/Mapmarker.png',
        // Размеры метки.
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-5, -38]
    });
myMap.geoObjects
    .add(myPlacemark)
});