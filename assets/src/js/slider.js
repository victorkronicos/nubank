// Utilizando jQuery para fazer o Slider

  $('.main-cards').slick({
    dots: true,
    infinite: false,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
  });


  // Utlizando jQuery para fazer o Bottom Slider

  $('#slick-bottom').slick({
    slide: 'li',
    dots: false,
    autoplay: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  });