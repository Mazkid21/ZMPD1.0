$(document).ready(() => {
    $('#photo .content').click(() => {
      $('#photo-overlay').addClass('animated fadeInLeft open').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated fadeInLeft');
      });
      $('#photo-overlay .product-content').addClass('animated flipInY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipInY');
      });
    });
    $('#photo-overlay .close-icon').click(() => {
      $('#photo-overlay').addClass('animated flipOutY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipOutY open');
      });
    });
    $('#dev .content').click(() => {
      $('#dev-overlay').addClass('animated fadeInRight open').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated fadeInRight');
      });
      $('#dev-overlay .product-content').addClass('animated flipInY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipInY');
      });
    });
    $('#dev-overlay .close-icon').click(() => {
      $('#dev-overlay').addClass('animated flipOutY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipOutY open');
      });
    });
  
    $('#test').click(() => {
      console.log('hio');
      $('#dev-single').addClass('animated fadeInLeft open').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated fadeInRight');
      });
      $('#dev-single .product-content').addClass('animated flipInY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipInY');
      });
    });
    $('#dev-single .close-icon').click(() => {
      $('#dev-single').addClass('animated flipOutY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipOutY open');
      });
    });
  
    $('#test2').click(() => {
      console.log('hio2');
      $('#photo-single').addClass('animated fadeInRight open').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated fadeInRight');
      });
      $('#photo-single .product-content').addClass('animated flipInY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipInY');
      });
    });
    $('#photo-single .close-icon').click(() => {
      $('#photo-single').addClass('animated flipOutY ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated flipOutY open');
      });
    });
  
    $(() => {
      let selectedClass = '';
      $('p').click(function () {
        selectedClass = $(this).attr('data-rel');
        $('#portfolio').fadeTo(100, 0.1);
        $('#portfolio div').not(`.${selectedClass}`).fadeOut();
        setTimeout(() => {
          $(`.${selectedClass}`).fadeIn();
          $('#portfolio').fadeTo(500, 1);
        }, 500);
      });
    });
  
    let isOpen = 0; // Is the menu open or closed?
  
    $('.nav').on('click', 'a', function () {
      $('.nav a.active').removeClass('active');
      $('.nav-li').removeClass('navResponsive');
      $('i.icon').removeClass('fa-times');
      $('i.icon').addClass('fa-bars');
      $(this).addClass('active');
    });
  
    $('.sidebar').on('click', '.icon', () => {
      if (isOpen == 0) {
        $('i.icon').removeClass('fa-bars');
        $('i.icon').addClass('fa-times');
        $('.nav-li').addClass('navResponsive');
        isOpen++;
      } else {
        $('.nav-li').removeClass('navResponsive');
        $('i.icon').removeClass('fa-times');
        $('i.icon').addClass('fa-bars');
        isOpen--;
      }
    });
  
    const FancYB = $('.fancyboxPhoto');
    FancYB.fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      padding: 0,
      closeBtn: true,
  
    });
    FancYB.attr('rel', 'gallery');
  
    // portfolio
    $('.gallery ul li a').click(function () {
        console.log("hello");
      const itemID = $(this).attr('href');
      $('.gallery ul').addClass('item_open');
      $(itemID).addClass('item_open');
      return false;
    });
    $('.close').click(() => {
      $('.port, .gallery ul').removeClass('item_open');
      return false;
    });
  
    $('.gallery ul li a').click(() => {
      $('html, body').animate({
        scrollTop: parseInt($('#top').offset().top),
      }, 400);
    });
  });
  