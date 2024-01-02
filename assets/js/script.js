$(window).on("load", function () {
  "use strict";

  //  ============= MOBILE RESPONSIVE MENU ===============

  $(".menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".responsive-mobile-menu").toggleClass("active");
  });

  $(".responsive-mobile-menu ul ul")
    .parent()
    .addClass("menu-item-has-children");
  $(".responsive-mobile-menu ul li.menu-item-has-children > a").on(
    "click",
    function () {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    }
  );

  $("html, .menu-btn.active").on("click", function () {
    $(".responsive-mobile-menu").removeClass("active");
    $(".menu-btn").removeClass("active");
  });

  $(".menu-btn, .responsive-mobile-menu").on("click", function (e) {
    e.stopPropagation();
  });

  //  ============= WEB LOADER ===============

  // load navbar.html
  $(function () {
    $("#navbarContainer").load("includes/navbar.html");
  });

  $(".page-loading").fadeOut();

  // ============ STICKY HEADER ==============

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $("header").addClass("sticky animated slideInDown");
    } else {
      $("header").removeClass("sticky animated slideInDown");
    }
  });
});
