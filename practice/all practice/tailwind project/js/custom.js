/*
Template: Medicate – Health & Medical HTML Template
Author: peacefulqode.com
Version: 1.2
Design and Developed by: PeacefulQode
*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Sticky Header
==> Owl Carousel
==> Back To Top
==> counter
==> wow
==> Video

==================================================
[ End table content ]
================================================*/



(function (jQuery) {
   "use strict";
   jQuery(window).on('load', function (e) {


      /*==================================================
      [ Page Loader ]
      ==================================================*/
      jQuery("#pq-loading").fadeOut();
      jQuery("#pq-loading").delay(0).fadeOut("slow");

      var Scrollbar = window.Scrollbar;


      /*==================================================
      [ Search Button ]
      ==================================================*/
      jQuery('#pq-seacrh-btn').on('click', function () {
         jQuery('.pq-search-form').slideToggle();
         jQuery('.pq-search-form').toggleClass('pq-form-show');
         if (jQuery('.pq-search-form').hasClass("pq-form-show")) {
            jQuery(this).html('<i class="ti-close"></i>');
         } else {
            jQuery(this).html('<i class="ti-search"></i>');
         }
      });

      /*==================================================
      [ Sticky Header ]
      ==================================================*/
      if (jQuery('header').hasClass('pq-header-default')) {
         jQuery(window).scroll(function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > 300) {
               jQuery('.pq-bottom-header').addClass('fixed top-0 bg-white w-full shadow-[0_5px_15px_0px_rgba(0,33,85,0.1)] wow animate-fadeInDown');
            } else {
               jQuery('.pq-bottom-header').removeClass('fixed top-0 bg-white w-full shadow-[0_5px_15px_0px_rgba(0,33,85,0.1)] wow animate-fadeInDown');
            }
         });
      }


      /*==================================================
      [ Owl Carousel ]
      ==================================================*/
      jQuery('.owl-carousel').each(function () {
         var app_slider = jQuery(this);
         app_slider.owlCarousel({
            items: app_slider.data("desk_num"),
            loop: app_slider.data("loop"),
            margin: app_slider.data("margin"),
            nav: app_slider.data("nav"),
            dots: app_slider.data("dots"),
            autoplay: app_slider.data("autoplay"),
            autoplayTimeout: app_slider.data("autoplay-timeout"),
            navText: ["<i class='ion-ios-arrow-back'></i><span></span>", "<span></span><i class='ion-ios-arrow-forward'></i>"],
            responsiveClass: true,
            responsive: {
               // breakpoint from 0 up
               0: {
                  items: app_slider.data("mob_sm"),
                  nav: false
               },
               // breakpoint from 480 up
               480: {
                  items: app_slider.data("mob_num"),
                  nav: false
               },
               // breakpoint from 786 up
               768: {
                  items: app_slider.data("tab_num")
               },
               // breakpoint from 1023 up
               1024: {
                  items: app_slider.data("lap_num")
               },
               1199: {
                  items: app_slider.data("desk_num")
               }
            }
         });
      });      
   });

   /*==================================================
   [ Back To Top ]
   ==================================================*/
   jQuery('#back-to-top').fadeOut();
   jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > 250) {
         jQuery('#back-to-top').fadeIn(1400);
      } else {
         jQuery('#back-to-top').fadeOut(400);
      }
   });
   jQuery('#top').on('click', function () {
      jQuery('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });


   /*==================================================
   [ counter ]
   ==================================================*/
   jQuery('.timer').countTo();

   /*==================================================
   [ wow ]
   ==================================================*/

   new WOW().init();

   /*==================================================
   [ Video ]
   ==================================================*/
   jQuery(document).ready(function () {
      jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   });

})(jQuery);