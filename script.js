$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $navLink = $(".nav-link");
      var $contactMenu = $(".contactmenu");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navLink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $contactMenu.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $('#webdevelop').on('shown.bs.collapse', function () {
    this.scrollIntoView();
  });
  $('#uxdesign').on('shown.bs.collapse', function () {
    this.scrollIntoView();
  });
  $('#some').on('shown.bs.collapse', function () {
    this.scrollIntoView();
  });
  $('#contentdesign').on('shown.bs.collapse', function () {
    this.scrollIntoView();
  });