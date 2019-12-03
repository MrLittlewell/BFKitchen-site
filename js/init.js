(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.carousel').carousel({
      indicators: false,
    });
    $('.next').click(function () {
      $('.carousel').carousel('next');
    });
    $('.prev').click(function () {
      $('.carousel').carousel('prev');
    });
    $('#loader').hide();
    $('.modal').modal();

    if (window.location.href.indexOf("textolite") > -1) {
      $('.for-textolite').show()
    }

    if ($(window).width() >= 960) {
      var lastScrollTop = 0;
      $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
          $('.navbar-fixed').attr("style", "opacity: 0; transition: .5s; top: -100px;");
        } else {
          $('.navbar-fixed').attr("style", "opacity: 1; transition: .5s; top: 0;").fadeIn(500);
        }
        lastScrollTop = st;
      });
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.collapsible li a').click(function () {
  let costValue = +$('.collapsible li.active .cost').html()
  let planName = $('section.site-main-banner h2').html()
  let dayCount = $('.collapsible li.active .day-plan').html()

  let currentCost = {
    planName: planName,
    price: costValue,
    day: dayCount
  }
  let costToJson = JSON.stringify(currentCost);
  localStorage.setItem("localPrice", costToJson);
  document.location.replace("/cart.html");
})

$('.lower-inner').hover(
  function () {
    $(this).addClass('hover')
  },
  function () {
    $(this).removeClass('hover')
  }
);
$('.our-program-section').hover(
  function () {
    $(this).addClass('hover')
  },
  function () {
    $(this).removeClass('hover')
  }
)

$('.lower-inner a').click(function () {
  let costValue = +$('.lower-inner.hover .cost').html()
  let planName = $('.blog-post-inner-title h2').html()
  let dayCount = $('.lower-inner.hover p').html()

  let currentCost = {
    planName: planName,
    price: costValue,
    day: dayCount
  }
  let costToJson = JSON.stringify(currentCost);
  localStorage.setItem("localPrice", costToJson);
  document.location.replace("/cart.html");
})

$('#order-form').submit(function (event) {

  event.preventDefault();

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    success: function (result) {
      $('#order-form input').val("");
      $('#thanks').modal('open');
      localStorage.clear();
    },
  });
});
$('#form-consult').submit(function (event) {

  event.preventDefault();

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    success: function (result) {
      $('#form-consult input').val("");
      $('#thanks').modal('open');
      localStorage.clear();
    },
  });
});
$('#callback form').submit(function (event) {

  event.preventDefault();

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    success: function (result) {
      $('#form-consult input').val("");
      $('#thanks').modal('open');
      localStorage.clear();
    },
  });
});

$('#phoneForm').mask('+375(00) 000-00-00');

$('.react-datepicker__input-container input').focus(function (e) {
  e.preventDefault();
  console.log('fork');
  $(this).blur();
})