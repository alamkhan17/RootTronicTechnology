/*
  Theme Name: Edubin - LMS Education HTML Template
  Author: PixelCurve
  Author URL: https://themeforest.net/user/pixelcurve
  Support: help.pixelcurve@gmail.com
  Description: Creative  HTML5 template.
  Version: 5.0
*/


$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Search
    
    $('#search').on('click', function(){
        $(".search-box").fadeIn(600);
    });
    $('.closebtn').on('click', function(){
        $(".search-box").fadeOut(600);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navigation").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else{
            $(".navigation").addClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo.png");
        }
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
    
    
    
    //===== Slick Slider
    
        function mainSlider() {
            
        var BasicSlider = $('.slider-active');
            
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
            
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
            
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: false,
            dots: false,
            fade: true,
			arrows: true,
            prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
    //===== Slick Category Slide
    
    $('.category-slide').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        responsive: [
        {
          breakpoint: 922,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== Slick Course Slide
    
    $('.course-slide').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //====== Magnific Popup
    
    $('.Video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Slick testimonial Slide
    
    $('.testimonial-slide').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== Slick testimonial Slide
    
    $('.patnar-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    //===== Slick testimonial Slide
    
    $('.student-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    
    
    
    //===== Nice Select
    
    $('select').niceSelect();
    
    
    
    //===== Count Down
    
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="count-down-time"><div class="single-count"><span class="number">%D :</span><span class="title">Days</span></div><div class="single-count"><span class="number">%H :</span><span class="title">Hours</span></div><div class="single-count"><span class="number">%M :</span><span class="title">Minuits</span></div><div class="single-count"><span class="number">%S</span><span class="title">Seconds</span></div></div>'));
      });
    });
    
    
    //=====  Rating selection
    
    $('.reviews-form').on('click', '.rate-wrapper .rate .rate-item', function() {
        var self = $(this),
            target = self.parent('.rate');
        target.addClass('selected');
        target.find('.rate-item').removeClass('active');
        self.addClass('active');
    });
        
    
    
    //===== Nice Number
    
    $('input[type="number"]').niceNumber({
        // custom button text
        buttonDecrement: "<i class='fa fa-sort-asc' ></i>",
        buttonIncrement: "<i class='fa fa-sort-desc' ></i>",

    });

    
    
    //===== Magnific Popup
    
    $('.shop-items').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    //===== Magnific Popup for image gallery
    $(document).ready(function() {
    $(".gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});
    
});
$(document).ready(function() {
  // Define data for each item
  var itemsData = [
      {
          number: "01",
          title: "Requirements Gathering and Analysis:",
          description: "Working closely with the client to understand their business needs, goals, and requirements for the application."
      },
      {
          number: "02",
          title: "Architecture and Design:",
          description: "Designing the architecture of the application to ensure scalability, reliability, and performance. Creating technical specifications and design documents."
      },
      {
          number: "03",
          title: "Development:",
          description: "Full-stack development services covering frontend, backend, and database development. Utilization of modern development frameworks and technologies. Agile development methodologies to ensure flexibility and rapid iteration."
      },
      {
          number: "04",
          title: "Quality Assurance and Testing:",
          description: "Implementing comprehensive testing strategies, including unit testing, integration testing, and end-to-end testing. Test automation to improve efficiency and reliability. Continuous integration and continuous deployment (CI/CD) pipelines to automate the testing and deployment process."
      },
      {
          number: "05",
          title: "Deployment and Infrastructure Management:",
          description: "Setting up deployment environments (development, staging, production). Configuration and management of cloud infrastructure (AWS, Azure, Google Cloud, etc.). Containerization using Docker and orchestration with Kubernetes for scalability and manageability."
      },
      {
          number: "06",
          title: "Monitoring and Support:",
          description: "Implementing monitoring solutions for performance monitoring and error tracking. Providing 24/7 support services to address issues and ensure uptime. Regular maintenance and updates to keep the application secure and up-to-date."
      },
      {
          number: "07",
          title: "Security:",
          description: "Implementing security best practices to protect against common vulnerabilities. Conducting regular security audits and penetration testing. Ensuring compliance with industry standards and regulations (e.g., GDPR, HIPAA, PCI DSS)."
      },
      {
          number: "08",
          title: "Documentation and Knowledge Transfer:",
          description: "Creating comprehensive documentation of the application architecture, codebase, and deployment procedures. Conducting knowledge transfer sessions to empower the client's team to understand and maintain the application."
      },
      {
          number: "09",
          title: "Performance Optimization:",
          description: "Optimizing the application's performance to ensure speed and responsiveness. Conducting load testing to ensure the application can handle expected traffic volumes."
      },
      {
          number: "10",
          title: "Scalability and Growth Planning:",
          description: "Planning for future growth and scalability of the application. Providing recommendations for feature enhancements and improvements based on user feedback and market trends."
      },
      {
          number: "11",
          title: "Cost Optimization:",
          description: "Offering recommendations for optimizing infrastructure costs without compromising performance or reliability. Utilizing cost-effective solutions and services where applicable."
      },
      {
          number: "12",
          title: "Reporting and Analytics:",
          description: "Implementing analytics tools to track user behavior and application performance. Providing regular reports on key metrics and performance indicators."
      }
  ];

  // Function to populate data for each item
  function populateItems() {
      var dynamicContent = $("#manage-members-services");
      $.each(itemsData, function(index, item) {
          var html = '<div class="col-lg-4 col-md-6 col-sm-10">';
          html += '<div class="about-single-items mt-30">';
          html += '<span>' + item.number + '</span>';
          html += '<h4>' + item.title + '</h4>';
          html += '<p>' + item.description + '</p>';
          html += '</div>'; // about single
          html += '</div>'; // col
          dynamicContent.append(html);
      });
  }

  // Call the function to populate items
  populateItems();
});