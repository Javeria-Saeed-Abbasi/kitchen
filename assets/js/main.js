jQuery(function ($) {
    // Click Scroll to Top Function
    $(".scroll").on('click', function (event) {
      event.preventDefault();
      $("html,body").animate({
         scrollTop: $(this.hash).offset().top
      }, 1000);
   });


   $("body").append("<a href='#' class='back-top'><i class='fa fa-angle-up'></i></a>");
   var amountScrolled = 700;
   var backBtn = $("a.back-top");
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > amountScrolled) {
         backBtn.addClass("back-top-visible");
      } else {
         backBtn.removeClass("back-top-visible");
      }
   });
   backBtn.on("click", function () {
      $("html, body").animate({
         scrollTop: 0
      }, 700);
      return false;
   });
  });   
$(document).ready(function(){
    $(".navbar .dropdown").hover(function() {
      $(this).find(".dropdown-toggle").dropdown("toggle");
    });
   
  });
  (function($, window, document, undefined) {
   'use strict';

   // init cubeportfolio
   $('#js-grid-mosaic-flat').cubeportfolio({
       filters: '#js-filters-mosaic-flat',
       loadMore: '#js-loadMore-mosaic-flat',
       loadMoreAction: 'click',
       layoutMode: 'mosaic',
       sortToPreventGaps: true,
       mediaQueries: [
         {
            width: 1024,
            cols: 2,
            
        },{
           width: 1500,
           cols: 2,
           
       }, {
           width: 1100,
           cols: 2,
       },
       {
          width: 768,
          cols: 2,
       }, {
           width: 800,
           cols: 3,
       }, {
           width: 480,
           cols: 1,
           options: {
               caption: '',
               //gapHorizontal: 15,
               gapHorizontal: 60,
               gapVertical: 15,
           }
       }],
       defaultFilter: '*',
       animationType: 'fadeOutTop',
       gapHorizontal: 120,
       gapVertical: 150,
       gridAdjustment: 'responsive',
       caption: 'zoom',
       displayType: 'fadeIn',
       displayTypeSpeed: 100,

       // lightbox
       lightboxDelegate: '.cbp-lightbox',
       lightboxGallery: true,
       lightboxTitleSrc: 'data-title',
       lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
       plugins: {
                    loadMore: {
                       element: "#js-loadMore-mosaic-flat",
                       action: "click",
                       loadItems: 5,
                    }
                 }
        
   })
     .on('initComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
           $("#js-loadMore-mosaic-flat").addClass("active");
        } else {
           $("#js-loadMore-mosaic-flat").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
           $(this).removeClass("even");

           console.log();
           var val = index + 1;
           if ($(this).css('left') !== "0px") {
              $(this).addClass("even");

           }
        });
     })
     .on('onAfterLoadMore.cbp', function () {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-mosaic-flat a").addClass("d-none");
        $("#js-loadMore-mosaic-flat").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
           $(this).removeClass("even");
           console.log();
           var val = index + 1;
           if ($(this).css('left') !== "0px") {
              $(this).addClass("even");
           }
        });
     })
     .on('filterComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
           $("#js-loadMore-mosaic-flat").addClass("active");
           $("#js-loadMore-mosaic-flat").removeClass("d-none");
        } else {
           $("#js-loadMore-mosaic-flat").removeClass("active");
           $("#js-loadMore-mosaic-flat").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
           $(this).removeClass("even");
           var val = index + 1;
           if ($(this).css('left') !== "0px") {
              $(this).addClass("even");
           }
        });
     });
})(jQuery, window, document);
