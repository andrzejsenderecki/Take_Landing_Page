require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_phoneSection.scss');
require('../scss/partials/_category.scss');
require('../scss/partials/_details.scss');
require('../scss/partials/_quality.scss');
require('../scss/partials/_whyWe.scss');
require('../scss/partials/_buy.scss');
require('../scss/partials/_footer.scss');

document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.header-menu-icon');
    const menuContent = document.querySelector('.header-menu-content');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');
    });

    // jQuery - header transition effect

    const $document = $(document);
    const $header = $('.header-bg');
    const $main = $('main');
    const $headerLogo = $('.header-logo');
    const $headerContent = $('.header-content');
    const $phoneSectionOffsetTop = $('.phone-section-container').offset().top;
    const $scrollOffset = $document.scrollTop();

    if($phoneSectionOffsetTop <= $scrollOffset) {
        $headerLogo.css('display','none');
        $headerContent.css('display','none');
    }

    $document.on('scroll', () => {
        const $docScroll = $document.scrollTop();
        const $headerHeight = $header.outerHeight();
        $header.css('opacity', 1 - $docScroll/$headerHeight);
        $headerLogo.css('opacity', 1 - $docScroll/$headerHeight);
        $headerContent.css('opacity', 1 - $docScroll/$headerHeight);
        if($phoneSectionOffsetTop <= $docScroll) {
            $headerLogo.css('display','none');
            $headerContent.css('display','none');
        } else {
            $headerLogo.css('display','block');
            $headerContent.css('display','block');
        }
    });

    // jQuery - animacje

    $(window).on('scroll', () => {

        // Quality Section

        const $windowScroll = $(window).scrollTop();
        const $heightWindow = $('.quality-section-container').outerHeight();
        const $qualitySection = $('.quality-section-container');
        const $qualitySectionOffsetTop = $('.quality-section-container').offset().top;
        const $qualitySectionBox = $('.quality-section-box');

        if($windowScroll > $qualitySectionOffsetTop+450) {
            let $counter = $windowScroll - $qualitySectionOffsetTop-450;
            $qualitySection.css('opacity', 1 - $counter/$heightWindow*3.5);
        } else {
            let $counter = $windowScroll - $qualitySectionOffsetTop-450;
            $qualitySection.css('opacity', 1 - $counter/$heightWindow*3.5);
        }

        if($windowScroll > $qualitySectionOffsetTop-100) {
            $qualitySectionBox.removeClass('quality-scroll-animate');
        } else {
            $qualitySectionBox.addClass('quality-scroll-animate');
        }
    });

    // jQuery scroll to sections

    const $headerSection = $('.header-container');
    const $phoneSection = $('.phone-section-container');
    const $categorySection = $('.category-section-container');
    const $featuresSection = $('.details-section-container');
    const $qualitySection = $('.quality-section-container');
    const $whyWeSection = $('.why-we-section-container');
    const $buySection = $('.buy-section-container');

    $('#top').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $headerSection.offset().top
        }, 2000);

    });

    $('#about').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $phoneSection.offset().top
        }, 2000);

    });

    $('#products').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $categorySection.offset().top
        }, 2000);
    });

    $('#details').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $featuresSection.offset().top
        },2000);
    });

    $('#quality').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $qualitySection.offset().top
        }, 2000);
    });

    $('#why-we').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $whyWeSection.offset().top
        }, 2000);
    });

    $('#buy').on('click', () => {

        menuBtn.classList.toggle('header-menu-icon-active');
        menuContent.classList.toggle('header-menu-content-invisible');

        $('html').animate({
            scrollTop: $buySection.offset().top
        }, 2000);
    });

});
