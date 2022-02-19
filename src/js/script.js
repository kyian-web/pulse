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
});

// Tabs ==============

const tabs = document.querySelectorAll('.catalog__tab'),
      tabsContent = document.querySelectorAll('.catalog__content'),
      tabsParent = document.querySelector('.catalog__tabs');

function hideTabContent() {
    tabs.forEach(item => {
        item.classList.remove('catalog__tab_active');
    });
    tabsContent.forEach(item => {
        item.classList.remove('catalog__content_active');
    });
}

function showTabContent(i = 0) {
    tabs[i].classList.add('catalog__tab_active');
    tabsContent[i].classList.add('catalog__content_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('catalog__tab') ) {
        tabs.forEach((item, i) => {
            if (e.target === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});


