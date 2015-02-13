$(document).ready(function () {
  $(document).scroll(function(){
    if($(this).scrollTop() > 500 && $(this).scrollTop() < 1300 ) {
      $('.inline-list a span').removeClass('active');
      $('.inline-list a[href="#mission"]' + ' span').addClass('active');
    } else if($(this).scrollTop() > 1301 && $(this).scrollTop() < 2400 ) {
      $('.inline-list a span').removeClass('active');
      $('.inline-list a[href="#featured-work"]' + ' span').addClass('active');
    } else if($(this).scrollTop() > 2401 && $(this).scrollTop() < 3100 ) {
      $('.inline-list a span').removeClass('active');
      $('.inline-list a[href="#products"]' + ' span').addClass('active');
    } else if($(this).scrollTop() > 3101 && $(this).scrollTop() < 4500 ) {
      $('.inline-list a span').removeClass('active');
      $('.inline-list a[href="#team-burkson"]' + ' span').addClass('active');
    } else if($(this).scrollTop() > 4501 && $(this).scrollTop() < 6000 ) {
      $('.inline-list a span').removeClass('active');
      $('.inline-list a[href="#contact"]' + ' span').addClass('active');
    } else {
      $('.inline-list a span').removeClass('active');
    }
  });

  $(document).scroll(function(){
    if($(this).scrollTop() > 200)
    {
      $('.sticky-header').addClass('opaque');
      $('.effect3 li a').css({"color":"#fff"});
    } else {
      $('.sticky-header').removeClass("opaque");
      $('.effect3 li a').css({"transition": "color 2s ease", "color":"#b1b1b1"});
    }
  });

  $(document).scroll(function(){
    if($(this).scrollTop() > 750 && $(this).scrollTop() < 1400 ) {
      $('.first-pic').addClass('hover-over');
    } else {
      $('.first-pic').removeClass('hover-over');
    }
    if($(this).scrollTop() > 1500 && $(this).scrollTop() < 1850){
      $('.second-pic').addClass('hover-over');
    } else {
      $('.second-pic').removeClass('hover-over');
    }
    if($(this).scrollTop() > 1850 && $(this).scrollTop() < 2450) {
      $('.third-pic').addClass('hover-over');
    } else {
      $('.third-pic').removeClass('hover-over');
    }
  });

  $("#team-wrap .row div.small-12").mouseenter(function() {
    $(this).find(".developer-avatar").stop(true, true).fadeToggle('slow');
    $(this).find(".developer-info").stop(true, true).animate({top: 'toggle'},1000, 'easeOutCirc');
  });

  $("#team-wrap .row div.small-12").mouseleave(function() {
    $(this).find(".developer-avatar").stop(true, true).fadeToggle('slow');
    $(this).find(".developer-info").stop(true, true).fadeToggle('slow');
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });
});
