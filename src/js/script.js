$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" /></button>',
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

});

// Tabs ==============

// const tabs = document.querySelectorAll('.catalog__tab'),
//       tabsContent = document.querySelectorAll('.catalog__content'),
//       tabsParent = document.querySelector('.catalog__tabs');

// function hideTabContent() {
//     tabs.forEach(item => {
//         // item.classList.remove('catalog__tab_active');
//         item.classList.remove('catalog__tab_active');
//     });
//     tabsContent.forEach(item => {
//         item.classList.remove('catalog__content_active');
//     });
// }

// function showTabContent(i = 0) {
//     tabs[i].classList.add('catalog__tab_active');
//     tabsContent[i].classList.add('catalog__content_active');
// }

// hideTabContent();
// showTabContent();

// tabsParent.addEventListener('click', (e) => {
//     if (e.target && e.target.classList.contains('catalog__tab') ) {
//         tabs.forEach((item, i) => {
//             if (e.target === item) {
//                 hideTabContent();
//                 showTabContent(i);
//             }
//         });
//     }
// });

// --------------------------

// const catalogLInk = document.querySelector('.catalog-item__link'),
//       catalogBack = document.querySelector('.catalog-item__back'),
//       catalogContent = document.querySelectorAll('.catalog-item__back'),
//       catalogList = document.querySelectorAll('.catalog-item__list');


