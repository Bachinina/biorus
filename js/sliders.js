$(document).ready(function () {
  // SLIDERS
  const screenWidth = $(document).width();
  const prevArrow = `
  <button type="button" class="slick-prev" aria-hidden="true">
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M6 11L1 6L6 1" />
    </svg>
  </button>`;
  const nextArrow = `
  <button type="button" class="slick-next" aria-hidden="true">
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M1 1L6 6L1 11" />
    </svg>
  </button>`;



  const doubleSliders = $('[data-double-slider]');
  doubleSliders.each(function () {
    const doubleSlider = $(this);
    let slideCount = doubleSlider.attr('data-slide-count');
    const parentSlider = doubleSlider.find('[data-parent-slider]');
    const childSlider = doubleSlider.find('[data-child-slider]');
    const isChildStatic = slideCount <= 3;

    if (slideCount <= 3) {
      childSlider.addClass('non-transform');
    } else {
      slideCount = 3;
    }

    parentSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: childSlider,
      draggable: false,
      infinite: !isChildStatic,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
    });


    parentSlider.on('click', function () {
      parentSlider.slick('slickNext');
    });

    childSlider.slick({
      slidesToShow: slideCount,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: parentSlider,
      focusOnSelect: true,
      draggable: false,
      touchMove: false,
      infinite: !isChildStatic,
      variableWidth: isChildStatic,
      focusOnSelect: true,
    });
  });


  $('[data-card-slider]').each(function () {
    $(this).slick({
      accessibility: false,
      speed: 600,
      draggable: false,
      dots: false,
      arrows: true,
      prevArrow: prevArrow,
      swipeToSlide: true,
      slidesToShow: 4,
      nextArrow: nextArrow,
      infinite: true,
      responsive: [{
          breakpoint: 1199,
          settings: {
            draggable: true,
            speed: 150,
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            draggable: true,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            draggable: true,
            slidesToShow: 1,
          }
        },

      ]
    });
  });

  $('[data-project-slider]').slick({
    accessibility: false,
    speed: 600,
    draggable: false,
    dots: false,
    arrows: true,
    prevArrow: prevArrow,
    swipeToSlide: true,
    slidesToShow: 3,
    nextArrow: nextArrow,
    infinite: true,
    responsive: [{
        breakpoint: 1199,
        settings: {
          draggable: true,
          speed: 150,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          draggable: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          draggable: true,
          slidesToShow: 1,
        }
      },

    ]
  });


});