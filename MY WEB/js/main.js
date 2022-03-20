
//top button scroller
// clicking on the button will take the user
// back to the top
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener("click", function (){
  window.scrollTo(0,0);
});

// Top button scroller shows after 800px
// code adapted from w3 schools

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#scrollTopBtn').fadeIn();
  } else {
    $('#scrollTopBtn').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'
  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});


// index page
//  -------------------------------------------------
//  -------------------------------------------------
//  -------------------------------------------------
//  -------------------------------------------------
//  -------------------------------------------------
//  -------------------------------------------------
//  -------------------------------------------------
//  -------------------------------------------------

// element will show after a certain heiight

 $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 580) {
    $('.index-title-quote').fadeIn();
  } else {
    $('.index-title-quote').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});

//index page/ intro section
// when the user scrolls down from the top of the index page
//  the back grown will darken as the user scrolls
var indexIntro = document.querySelector('#index-intro')
window.addEventListener('scroll', function()
{
  indexIntro.style.opacity = 1 - +window.pageYOffset/950+''
  indexIntro.style.opacity =  +window.pageYOffset+'px'
})


//image for index page
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1150) {
    $('.index-text-img').fadeIn();
  } else {
    $('.index-text-img').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'
  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});

// the text suplimenting the image
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 850) {
    $('.index-text').fadeIn();
  } else {
    $('.index-text').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});



// the main nav menu will form a
// SIDEMENU when view port width reduces
const sidemenu = document.querySelector('.sidemenu');
const naviLinks = document.querySelector('.navi-links');
const links = document.querySelectorAll('navi-links li');


sidemenu.addEventListener('click', ()=>{
  naviLinks.classList.toggle('open');
});

// WHAT IS FEUDALISM PAGE
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------

// tEXT APPEARANCE
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 550) {
    $('.whatis-text').fadeIn();
  } else {
    $('.whatis-text').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});



// the use of ID invocation
// to make a certain elemant appear on scroll

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1800) {
    $('#Shogun').fadeIn();
  } else {
    $('#Shogun').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});

//
//
//

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2800) {
    $('#Daimyo').fadeIn();
  } else {
    $('#Daimyo').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});

//
//
//

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3900) {
    $('#Samurai').fadeIn();
  } else {
    $('#Samurai').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});

//
// ///////////////////////////////////////////


// ////////////////////////////////////////////////////
// ///////////////////////////////////////////////////

// EVENTS/INVOLVED PAGE

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 350) {
    $('.involved-box').fadeIn();
  } else {
    $('.involved-box').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});

// ////////////
// ////////////

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1700) {
    $('.involved-box1').fadeIn();
  } else {
    $('.involved-box1').fadeOut();
  }

  // Show element after user scrolls past when it scrolls past 'height'

  $('').each(function() {
    var height = $(this).parent().offset().top;
    if (y > height) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
});
