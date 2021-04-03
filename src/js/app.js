var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });


  $(".heart.far").click(function() {
    $(this).toggleClass("far-heart fa-heart");
  });
  $(".heart.fas").click(function() {
    $(this).toggleClass("fas-heart fa-heart");
  });
  

  
  $('#nav-icon1').on('click', function(){
    $(this).toggleClass('open');
    $('.hamburger-menu').toggleClass("active");
    
  });
  
  $('.hamburger-menu li').on('click', function(){
    $('.hamburger-menu').removeClass('active')
    $('#nav-icon1').removeClass('open')
  });



  var closebtns = document.getElementsByClassName("close");
  var i;
  
  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }
 



  $(".btn a").on("click", function(){
  $(this).find($(".fa")).removeClass('fa-cart-plus').addClass('fa-check');
});

$(".btn a").click(function(){
  $(this).find("i").toggleClass("fa-check");
});


$(function() {
  var Accordion = function(el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;
  
  var links = this.el.find('.link');
  
  links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  
  Accordion.prototype.dropdown = function(e) {
  var $el = e.data.el;
  $this = $(this),
  $next = $this.next();
  
  $next.slideToggle();
  $this.parent().toggleClass('open');
  
  if (!e.data.multiple) {
  $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
  };
  }
  
  var accordion = new Accordion($('#accordion'), false);
  });