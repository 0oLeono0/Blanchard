
(function ($) {
    $(function () {

        $('input, select').styler();

    });
})(jQuery);

const events__all = document.querySelector(".events__all");
const events__blocks = document.querySelector(".events__blocks");

events__all.addEventListener("click", btnClick);

function btnClick() {
    events__blocks.classList.toggle("vis");
}

const hero__slider = new Swiper('.hero__slider', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

const gallery__slider = new Swiper('.gallery__slider', {
    slidesPerView: 1,
    spaceBetween: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 1,

    breakpoints: {
        577: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 34, 
        },
        1367: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
            spaceBetween: 50, 
        },
    },
    // Optional parameters
    direction: 'horizontal',
    // If we need pagination
    pagination: {
        el: '.gallery-swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const editions__slider = new Swiper('.editions__slider', {
    slidesPerView: 2,
    slidesPerColumn: 4,
    spaceBetween: 30,

    breakpoints: {
        577: {
            slidesPerView: 2,
            slidesPerColumn: 1, 
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1025: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            slidesPerGroup: 3,
            spaceBetween: 50, 
        },
    },

    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    pagination: {
        el: '.editions-swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

if (window.matchMedia("(max-width: 576px)").matches) {
    editions__slider.destroy(true, true)
}

const partners__slider = new Swiper('.partners__slider', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    
    breakpoints: {
        577: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },

        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },

        1367: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.partners__arrow--next',
        prevEl: '.partners__arrow--prev',
    },
});

$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  } );

const events__slider = new Swiper('.events__slider', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
    breakpoints: {
        577: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
    },
  
    // If we need pagination
    pagination: {
      el: '.events-swiper-pagination',
      clickable: true,
    },
  });

  if (window.matchMedia("(min-width: 576px)").matches) {
    events__slider.destroy(true, true)
  }

$('input[type="number"]').on('focus', function (e) {
    $(this).on('wheel', function (e) {
        e.preventDefault();
    });
});

$('a').on('click', function (event) {
    event.preventDefault();

    let href = $(this).attr('href');

    let offset = $(href).offset().top;


    $('body,html').animate({
        scrollTop: offset,

    }, 700);
});
let select = function () {
    let selectHeader = document.querySelectorAll('.gallery__select__header');
    let selectItem = document.querySelectorAll('.gallery__select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.gallery__select'),
            currentText = select.querySelector('.gallery__select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

select();
$(".editions__select__header").click(function () {
    $(this).toggleClass("active-hedaer");
    $(".editions__select__item").not($(".check__input:checked")).slideToggle(300)
    if ($(this).hasClass("active-header")) {
        $(".check__input:checked").parent().slideUp(300);
    } else {
        $(".check__input:checked").parent().slideDown(300);
    }
})
$(".editions__select__item").click(function () {
    if (!$(this).find($(".check__input")).prop("checked")) {
        $(this).slideUp(300);
    }
})

var i = 0;

$(".header__select").each(function () {
    i++;
    $(this).attr("data-name", "header__select__header" + i);
});

$("[data-name=" + i + "]").ready(function () {

    var thisAttr = $(this).find(".header__select__header").parent();

    $(this).find(".header__select__header").click(function (event) {
        $(".header__select__header").not(this).parent().removeClass("is-active");
        $(this).parent().toggleClass("is-active");
    });

    $(document).on('click touchstart', function (e) {
        if (!$(e.target).closest(thisAttr).length) {
            thisAttr.removeClass("is-active");
        }
    });
});

const searchBtn = document.querySelector('.search__btn--tablet');
const searchClose = document.querySelector('.search__close');
const search = document.querySelector('.search--mini');

function showSearch() {
    menu.classList.add('search--showed');
}
function closeSearch() {
    menu.classList.remove('search--showed');
}

searchBtn.addEventListener('click', showSearch);
searchClose.addEventListener('click', closeSearch);



const burger = document.querySelector('.header__burger');
const close = document.querySelector('.header__close');
const menu = document.querySelector('.menu');

function showMenu() {
    menu.classList.add('menu--showed');
}
function closeMenu() {
    menu.classList.remove('menu--showed');
}


burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);


var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.contacts__form__form', {
    rules: {
        name: {
            required: true,
            minLength: 1,
            maxLength: 20
        },
        phone: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },

    },
    messages: {
        name: {
            required: 'Как вас зовут?'
        },
        phone: {
            required: 'Укажите ваш телефон',
            function: 'Неверный формат телефона'
        },

    },

    submitHandler: function (form, values, ajax) {
        ajax({
            url: '/php/form.php',
            method: 'POST',
            data: values,
            async: true,
            callback: function (response) {
                form.reset();
                $('.form__popup').addClass('is-show');
                $('.form__popup__overlay').addClass('is-show');
                $('.form__popup__text').text('Письмо успешно отправлено');

                $('.form__popup__close').click(function () {
                    $('.form__popup').removeClass('is-show');
                    $('.form__popup__overlay').removeClass('is-show');
                });
                $('.form__popup__overlay').click(function () {
                    $('.form__popup').removeClass('is-show');
                    $(this).removeClass('is-show');
                })
            },
            error: function (response) {
                form.reset();
                $('.form__popup').addClass('is-show');
                $('.form__popup__overlay').addClass('is-show');
                $('.form__popup__text').text('Ошибка отправки');

                $('.form__popup__close').click(function () {
                    $('.form__popup').removeClass('is-show');
                    $('.form__popup__overlay').removeClass('is-show');
                });
                $('.form__popup__overlay').click(function () {
                    $('.form__popup').removeClass('is-show');
                    $(this).removeClass('is-show');
                })
            }
        });
    },

    invalidFormCallback: function (errors) {
        console.log(errors);
    },
});



$('.catalog__tabs__link').click(function(e){
    e.preventDefault();

    $('.catalog__tabs__link').removeClass('catalog__tabs__link--active');
    $('.tabs__panel').removeClass('tabs__panel--active');

    $(this).addClass('catalog__tabs__link--active');
    $($(this).attr('href')).addClass('tabs__panel--active');
});

$('.gallery__slide').click(function (event) {
    event.preventDefault();

    var modalName = $(this).attr('data-id');
    var modal = $('.gallery__modal[data-id="' + modalName + '"]');

    modal.addClass('is-show');
    $('.gallery__modal__overlay').addClass('is-show')
});

$('.gallery__modal__close').click(function () {
    $('.gallery__modal').removeClass('is-show');
    $('.gallery__modal__overlay').removeClass('is-show');
});

$('.gallery__modal__overlay').click(function () {
    $('.gallery__modal').removeClass('is-show');
    $(this).removeClass('is-show');
})

var $tabs = function (target) {
    var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
            var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
            tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
            tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
            tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
            // если следующая вкладка равна активной, то завершаем работу
            if (tabsLinkTarget === tabsLinkActive) {
                return;
            }
            // удаляем классы у текущих активных элементов
            if (tabsLinkActive !== null) {
                tabsLinkActive.classList.remove('tabs__link_active');
            }
            if (tabsPaneShow !== null) {
                tabsPaneShow.classList.remove('tabs__pane_show');
            }
            // добавляем классы к элементам (в завимости от выбранной вкладки)
            tabsLinkTarget.classList.add('tabs__link_active');
            tabsPaneTarget.classList.add('tabs__pane_show');
            document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
            var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
            if (tabsLinks.length > 0) {
                if (tabsLinkIndex > tabsLinks.length) {
                    tabsLinkIndex = tabsLinks.length;
                } else if (tabsLinkIndex < 1) {
                    tabsLinkIndex = 1;
                }
                _showTab(tabsLinks[tabsLinkIndex - 1]);
            }
        };

    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

    _elemTabs.addEventListener('click', function (e) {
        var tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
            return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
    });

    return {
        showTab: function (target) {
            _showTab(target);
        },
        switchTabTo: function (index) {
            _switchTabTo(index);
        }
    }

};

$tabs('.catalog__content');

