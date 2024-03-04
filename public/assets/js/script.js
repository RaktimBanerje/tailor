$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  // ---> Site Header Shrink
  const siteHeader = $(".site-header");
  $(window).scroll(function () {
    if ($(document).scrollTop() > 30) {
      siteHeader.addClass("site-header--shrinked");
    } else {
      siteHeader.removeClass("site-header--shrinked");
    }

    // Scroll Top fade in out
    if ($(document).scrollTop() > 300) {
      $(".btn--scroll-to-top").addClass("show");
    } else {
      $(".btn--scroll-to-top").removeClass("show");
    }
  });

  $(".btn--scroll-to-top").on("click", function () {
    scrollToTop(0, 500);
  });

  function scrollToTop(offset, duration) {
    $("html, body").animate({ scrollTop: offset }, duration);
    return false;
  }

  // ---> Test Overflowing Element
  // var docWidth = document.documentElement.offsetWidth;

  // [].forEach.call(document.querySelectorAll("*"), function (el) {
  //   if (el.offsetWidth > docWidth) {
  //     console.log(el);
  //   }
  // });

  if ($("#element").length > 0) {
    // Exists.
    var typed = new Typed("#element", {
      strings: ["Suits", "Shirts", "Pants"],
      typeSpeed: 200,
      loop: true,
      cursorChar: ".",
    });
  }

  // ---> Partners Carousel
  $(".brands-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    margin: 10,
    nav: false,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: true,
    responsive: {
      0: {
        items: 2,
        margin: 12,
      },
      576: {
        items: 3,
        margin: 12,
      },
      768: {
        items: 3,
        margin: 16,
      },
      992: {
        items: 4,
        margin: 20,
      },
      1200: {
        items: 5,
        margin: 24,
      },
      1400: {
        items: 6,
        margin: 28,
      },
    },
  });

  // ---> Products Owl Carousel
  $(".services-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    margin: 0,
    nav: false,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // ---> Blog Carousel
  $(".blog-carousel").owlCarousel({
    loop: false,
    autoplay: false,
    autoplayHoverPause: false,
    autoWidth: true,
    smartSpeed: 1000,
    margin: 12,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    dots: true,
    responsive: {
      576: {
        margin: 16,
      },
      768: {
        margin: 20,
      },
      992: {
        margin: 24,
      },
      1200: {
        margin: 28,
      },
      1400: {
        margin: 32,
      },
      1700: {
        margin: 40,
      },
    },
  });

  // ---> Testimonials Carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    items: 1,
    nav: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 12,
      },
      576: {
        items: 1,
        margin: 12,
      },
      768: {
        items: 1,
        margin: 16,
      },
      992: {
        items: 1,
        margin: 20,
      },
      1200: {
        items: 1,
        margin: 24,
      },
      1400: {
        items: 1,
        margin: 28,
      },
      1700: {
        items: 1,
        margin: 32,
      },
    },
  });

  // ---> Accordion
  $(".set > a").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });

  // ---> Search Function on Header
  $(".site-header__button--search").on("click", function () {
    $(".site-header .form-wrapper").addClass("form-wrapper--show");
    $("body").toggleClass("scroll--disabled");
    $(".site-content").toggleClass("pe-none");
  });

  $(".form-wrapper__button--close").on("click", function () {
    $(".site-header .form-wrapper").removeClass("form-wrapper--show");
    $("body").removeClass("scroll--disabled");
    $(".site-content").removeClass("pe-none");
  });

  // ---> Faqs Search Form
  var faqsField = $(".faqs-form input");
  var faqsResetBtn = $(".faqs-form .form__button--reset");

  faqsField.on("keyup", function () {
    const getVal = $(this).val().toUpperCase().trim();

    if (getVal) {
      var isItemFound = false;
      $(".faqs-section .qa-grid .qa-col").hide();
      faqsResetBtn.show();
      $(".faqs-search-status").removeClass("d-none");

      $(".faqs-section .qa-block .qa-block__header .qa-block__question").each(function () {
        if ($(this).text().toUpperCase().includes(getVal)) {
          $(this).closest(".qa-col").show();
          isItemFound = true;
        }
      });

      if (isItemFound) {
        $(".faqs-search-status").addClass("d-none");
      }
    } else {
      $(".faqs-section .qa-grid .qa-col").show();
      faqsResetBtn.hide();
    }
  });

  faqsResetBtn.on("click", function (e) {
    e.preventDefault();
    $(this).closest(".form").trigger("reset");
    $(".faqs-section .qa-grid .qa-col").show();
  });

  // ---> Maginific Popup
  $(".gallery-carousel a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  //   // $(document.documentElement).removeClass("light").addClass("dark");
  //   $(document.documentElement).attr("data-bs-theme", "dark");
  //   $(".switcher-input").prop("checked", true);
  // } else {
  //   // $(document.documentElement).removeClass("dark").addClass("light");
  //   $(document.documentElement).attr("data-bs-theme", "light");
  //   $(".switcher-input").prop("checked", false);
  // }

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");

  // $(".switcher-input").each(function () {
  //   $(this).on("change", function (e) {
  //     e.preventDefault();

  //     if ($(this).checked === true || localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  //       // $(document.documentElement).removeClass("dark").addClass("light");
  //       $(document.documentElement).attr("data-bs-theme", "light");
  //       $(".switcher-input").prop("checked", false);
  //       // Whenever the user explicitly chooses light mode
  //       localStorage.theme = "light";
  //     } else {
  //       // $(document.documentElement).removeClass("light").addClass("dark");
  //       $(document.documentElement).attr("data-bs-theme", "dark");
  //       $(".switcher-input").prop("checked", true);
  //       // Whenever the user explicitly chooses dark mode
  //       localStorage.theme = "dark";
  //     }
  //   });
  // });

  // ---> Count up
  if ($("main").find("#counter").length) {
    var counted = 0;
    $(window).scroll(function () {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                // alert('finished');
              },
            }
          );
        });
        counted = 1;
      }
    });
  }

  // ---> Maginific video play
  $(".btn--video-play").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  // ---> Magnific Popup
  $(".gallery a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".how-to-measure-section .nav .nav-link").on("click", function () {
    scrollToTop(0, 500);
  });

  // $(".custom-radio-input-wrap label .btn--more-info").on("click", function(e) {
  //   e.preventDefault();
  //   console.log("working");
  // })

  // ---> Prouduct Single Thumbnail Gallery
  $("#productSingleSlider").sliderPro({
    // Width of the slide
    width: 360,

    // Height of the slide
    height: 480,

    // Indicates if the slider is responsive
    responsive: true,

    // The aspect ratio of the slider (width/height)
    aspectRatio: 3/4,

    // The scale mode for images (cover, contain, exact and none)
    imageScaleMode: "cover",

    // Indicates if the image will be centered
    centerImage: true,

    // Indicates if the image can be scaled up more than its original size
    allowScaleUp: true,

    // Indicates if height of the slider will be adjusted to the
    // height of the selected slide
    autoHeight: false,

    // Will maintain all the slides at the same height, but will allow the width of the slides to be variable if the orientation of the slides is horizontal and vice-versa if the orientation is vertical.
    autoSlideSize: false,

    // Indicates the initially selected slide
    startSlide: 0,

    // Indicates if the slides will be shuffled
    shuffle: false,

    // Indicates whether the slides will be arranged horizontally
    // or vertically. Can be set to 'horizontal' or 'vertical'.
    orientation: "horizontal",

    // Indicates if the size of the slider will be forced to 'fullWidth' or 'fullWindow'
    forceSize: "none",

    // Indicates if the slider will be loopable
    loop: true,

    // The distance between slides
    slideDistance: 0,

    // The duration of the height animation
    heightAnimationDuration: 700,

    // Sets the size of the visible area, allowing the increase of it in order
    // to make more slides visible.
    // By default, only the selected slide will be visible.
    visibleSize: "auto",

    // Breakpoints for allowing the slider's options to be changed
    // based on the size of the window.
    breakpoints: {
      1199: {
        thumbnailsPosition: "bottom",
        width: 400,
        height: 400,
      },
    },

    // Indicates whether the selected slide will be in the center of the slider, when there are more slides visible at a time.
    // If set to false, the selected slide will be in the left side of the slider.
    centerSelectedSlide: true,

    // Indicates if the direction of the slider will be from right to left, instead of the default left to right.
    rightToLeft: false,

    // Indicates if fade will be used.
    fade: "true",

    // Indicates if the previous slide will be faded out (in addition to the next slide being faded in).
    fadeOutPreviousSlide: true,

    // Sets the duration of the fade effect.
    fadeDuration: 500,

    // Indicates whether or not autoplay will be enabled.
    autoplay: true,

    // Sets the delay/interval (in milliseconds) at which the autoplay will run.
    autoplayDelay: 5000,

    // Indicates whether autoplay will navigate to the next slide or previous slide.
    // 'normal' and 'backwards'
    autoplayDirection: "normal",

    // Indicates if the autoplay will be paused or stopped when the slider is hovered.
    // 'pause', 'stop' and 'none'
    autoplayOnHover: "pause",

    // Indicates whether the arrow buttons will be created.
    arrows: true,

    // Indicates whether the arrows will fade in only on hover.
    fadeArrows: true,

    // Indicates whether the buttons will be created.
    buttons: false,

    // Indicates whether keyboard navigation will be enabled.
    keyboard: true,

    // Indicates whether the slider will respond to keyboard input only when the slider is in focus.
    keyboardOnlyOnFocus: false,

    // Indicates whether the touch swipe will be enabled for slides.
    touchSwipe: true,

    // Sets the minimum amount that the slides should move.
    touchSwipeThreshold: 50,

    // Indicates whether or not the captions will be faded.
    fadeCaption: true,

    // Sets the duration of the fade animation.
    captionFadeDuration: 500,

    // Indicates whether the full-screen button is enabled.
    fullScreen: false,

    // Indicates whether the button will fade in only on hover.
    fadeFullScreen: true,

    // Indicates whether the slider will wait for the layers to disappear before going to a new slide.
    waitForLayers: false,

    // Indicates whether the layers will be scaled automatically.
    autoScaleLayers: true,

    // Sets a reference width which will be compared to the current slider width in order to determine how much the layers need to scale down.
    // By default, the reference width will be equal to the slide width.
    // However, if the slide width is set to a percentage value, then it's necessary to set a specific value for 'autoScaleReference'.
    autoScaleReference: -1,

    // If the slider size is below this size, the small version of the images will be used.
    smallSize: 480,

    // If the slider size is below this size, the medium version of the images will be used.
    mediumSize: 768,

    // If the slider size is below this size, the large version of the images will be used.
    largeSize: 1024,

    // Indicates whether the hash will be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d when a new slide is selected.
    updateHash: false,

    // Sets the action that the video will perform when its slide container is selected.
    // 'playVideo' and 'none'
    reachVideoAction: "none",

    // Sets the action that the video will perform when another slide is selected.
    // 'stopVideo', 'pauseVideo', 'removeVideo' and 'none'
    leaveVideoAction: "pauseVideo",

    // Sets the action that the slider will perform when the video starts playing
    // 'stopAutoplay' and 'none'
    playVideoAction: "stopAutoplay",

    // Sets the width of the thumbnail.
    thumbnailWidth: 90,

    // Sets the height of the thumbnail.
    thumbnailHeight: 120,

    // 'top', 'bottom', 'right' and 'left'
    thumbnailsPosition: "left",

    // Indicates if a pointer will be displayed for the selected thumbnail
    thumbnailPointer: false,

    // Indicates whether the thumbnail arrows will be enabled
    thumbnailArrows: true,

    // Indicates whether the touch swipe will be enabled for thumbnails
    thumbnailTouchSwipe: true,
  });
});
