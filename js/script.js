new WOW().init();


// =======banner=========
$(document).ready(function () {
  var swiper = new Swiper(".swiper-container-h", {
    speed: 1500,
    // autoplay: {
    //   delay: 5000,
    // },
    autoplay: false,
    parallax: true,
    mousewheel: false,
    loop: true,

    on: {
      init: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find('.slide-bg ')
            .attr({
              'data-swiper-parallax': 0.75 * swiper.width
            });
        }
      },
      resize: function () {
        this.update();
      }
    },

    pagination: {
      el: '.creative-showcase--slider .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' +
          '<svg class="fp-arc-loader" width="25" height="25" viewBox="0 0 25 25">' +
          '<circle class="path" cx="12.5" cy="12.5" r="8" fill="none" transform="rotate(-90 12.5 12.5)" stroke="#FFF" stroke-opacity="1" stroke-width="1.5"></circle>' +
          '<circle cx="12.5" cy="12.5" r="4.5" fill="#FFF"></circle>' +
          '</svg>' +
          '</span>'
        );
      }

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});


/* Service Item Active Start */
var $our_services = $('.our-services');
if ($our_services.length) {
  var $service_item = $our_services.find('.service-item');

  if ($service_item.length) {
    // Remove active class initially
    $service_item.removeClass('active');

    // Add active class only on hover
    $service_item.on({
      mouseenter: function () {
        $(this).addClass('active');
      },
      mouseleave: function () {
        $(this).removeClass('active');
      }
    });
  }
}






// ------------card slide
// $(function () {
//   gsap.registerPlugin(ScrollTrigger);

//   const sections = gsap.utils.toArray(".highlight-section");

//   sections.forEach((section, index) => {
//     // Ensure later sections have higher z-index so they come on top
//     gsap.set(section, { zIndex: index + 1 });

//     ScrollTrigger.create({
//       trigger: section,
//     //   start: "top-=20 top",
//       start: "top top",
//       pin: true,
//       pinSpacing: false,
//       markers: false
//     });
//   });
// });
var swiperhome = new Swiper(".homeswiper", {
  // slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next-product',
    prevEl: '.swiper-button-prev-product',
  },
  loop: false,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  slidesPerGroup: 1,
  watchOverflow: true,
});



var swiperblog = new Swiper(".blog-swiper", {
  // slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next-product',
    prevEl: '.swiper-button-prev-product',
  },
  loop: true,
  speed: 900,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  slidesPerGroup: 1,
  watchOverflow: true,
});
// ================image move on hover
(function ($) {
  "use strict";

  // Check if tilt plugin and elements exist before running
  if ($(".tilt-box").length && typeof $.fn.tilt !== "undefined") {
    $(".tilt-box").tilt({
      maxTilt: 15,
      perspective: 1400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 1200,
      glare: true,
      maxGlare: 0.2,
      scale: 1.04,
    });
  } else {
    console.log("Tilt effect skipped: .tilt-box not found or tilt.js not loaded");
  }

})(jQuery);


// ================image reavel

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});



// =============================
(function syncScrollImages() {
  const visualImgs = document.querySelectorAll('.home-scroll_img');
  const textImgs = document.querySelectorAll('.home-scroll_photo');

  const len = Math.min(visualImgs.length, textImgs.length);

  for (let i = 0; i < len; i++) {
    visualImgs[i].src = textImgs[i].src;
    visualImgs[i].alt = textImgs[i].alt;
  }
})();


// ------------------------------
// SCROLLTRIGGER ACTIVE SWITCHING
// ------------------------------
document.querySelectorAll(".home-scroll_section").forEach((section) => {
  let childTriggers = section.querySelectorAll(".home-scroll_text-item");
  let childTargets = section.querySelectorAll(".home-scroll_img-item");

  // switch active class
  function makeItemActive(index) {
    childTriggers.forEach(trigger => trigger.classList.remove("is-active"));
    childTargets.forEach(target => target.classList.remove("is-active"));

    childTriggers[index].classList.add("is-active");
    childTargets[index].classList.add("is-active");
  }

  makeItemActive(0);

  // create triggers
  childTriggers.forEach((trigger, index) => {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      onToggle: ({ isActive }) => {
        if (isActive) {
          makeItemActive(index);
        }
      }
    });
  });
});

// ==============================testimonial
var testimonialSwiper = new Swiper(".myTestimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonial-swiper .next",
    prevEl: ".testimonial-swiper .prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".map-filters .filter");
  const iconsets = document.querySelectorAll(".iconset");

  filters.forEach(filter => {
    filter.addEventListener("click", e => {
      e.preventDefault();

      // Remove active state from filters
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");

      // Show related iconset
      const target = filter.getAttribute("href");
      iconsets.forEach(set => set.classList.remove("active"));
      document.querySelector(target).classList.add("active");
    });
  });

  document.querySelectorAll(".pin").forEach(pin => {
    pin.addEventListener("click", () => {
      const country = pin.dataset.country;
      const url = pin.dataset.href;
      alert(`You clicked on ${country}\n(${url})`);
    });
  });
});

// ========================================


document.addEventListener("DOMContentLoaded", function () {
  const blogItems = document.querySelectorAll(".front-blog-item");

  blogItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      blogItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector(".article__thumbnail").style.opacity = "1";
        }
      });
    });

    item.addEventListener("mouseleave", () => {
      blogItems.forEach(otherItem => {
        otherItem.querySelector(".article__thumbnail").style.opacity = "1";
      });
    });
  });
});



var galleryHistroyThumbs = new Swiper('.gallery-history-thumbs', {
  spaceBetween: 0,
  slidesPerView: 5,
  watchSlidesProgress: true,
  navigation: false,
  speed: 3000,
  loop: false,
  allowTouchMove: false,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
    1368: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  },
});



var galleryHistroyMain = new Swiper('.gallery-history-main', {
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 3000,
  loop: false,
  autoHeight: false,
  thumbs: {
    swiper: galleryHistroyThumbs
  },
  allowTouchMove: false,
  effect: "fade",
  navigation: {
    nextEl: '.hswiper-button-next',
    prevEl: '.hswiper-button-prev',
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});



// news slide
var newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".newsSwiper .next",
    prevEl: ".newsSwiper .prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});



document.addEventListener('DOMContentLoaded', function () {
  const swiperElement = document.querySelector('.swiper-slider');

  if (swiperElement) {
    // Read configuration data from HTML attributes
    const loopEnabled = swiperElement.getAttribute('data-loop') === 'true';
    const autoplayEnabled = swiperElement.getAttribute('data-autoplay') === 'true';
    const showDots = swiperElement.getAttribute('data-dots') === 'true';
    const columns = parseInt(swiperElement.getAttribute('data-columns')) || 1;
    const spaceBetween = parseInt(swiperElement.getAttribute('data-margin')) || 30;
    const effectType = swiperElement.getAttribute('data-effect') || 'slide';

    const swiperConfig = {
      loop: loopEnabled,
      initialSlide: 0, // ensures first slide is shown first
      effect: effectType,
      slidesPerView: columns,
      spaceBetween: spaceBetween,

      ...(autoplayEnabled && {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        }
      }),

      ...(showDots && {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }),

      breakpoints: {
        767: {
          slidesPerView: Math.min(1, columns),
          spaceBetween: 20
        },
        1024: {
          slidesPerView: columns,
          spaceBetween: spaceBetween
        }
      }
    };

    const swiper = new Swiper('.swiper-slider', swiperConfig);
  }
});

// =====================map
const branches = document.querySelectorAll(".branch-item");
const pins = document.querySelectorAll(".map-pin");
const branchDetails = document.getElementById("branch-details");

branches.forEach((branch) => {
  branch.addEventListener("mouseenter", () => {
    // Reset all branches and pins
    branches.forEach((b) => b.classList.remove("active"));
    pins.forEach((pin) => pin.classList.remove("active"));

    // Activate current branch
    branch.classList.add("active");

    const location = branch.dataset.location;
    const targetPin = document.getElementById(`${location}-pin`);

    if (targetPin) targetPin.classList.add("active");

    // Update info section
    if (location === "australia") {
      branchDetails.innerHTML = `
        <h3>Cyber Security Services in Australia, Threatsys</h3>
        <div class="contact-info">
          <span>Adelaide, Brisbane, Christchurch, Melbourne, Perth, Sydney, Wellington</span>
        </div>`;
    }
    else if (location === "asia") {
      branchDetails.innerHTML = `
    <h3>Cyber Security Services in Asia, Threatsys</h3>
    <div class="contact-info">
      <span>Abu Dhabi, Dubai, Doha, Qatar, India (Agra, Mumbai, etc.), Indonesia, Malaysia, Oman, Saudi Arabia, Sri Lanka, Singapore, Thailand, etc.</span>
    </div>`;
    }
    else if (location === "africa") {
      branchDetails.innerHTML = `
    <h3>Cyber Security Services in Africa, Threatsys</h3>
    <div class="contact-info">
      <span>Algeria, Angola, Egypt, Kenya, Libya, Mauritius, Morocco, Mozambique, Nigeria, Tunisia</span>
    </div>`;
    }
    else if (location === "europe") {
      branchDetails.innerHTML = `
    <h3>Cyber Security Services in Europe, Threatsys</h3>
    <div class="contact-info">
      <span>Austria, Belgium, Denmark, Finland, France, Germany, Hungary, Iceland, Netherlands, Norway, Poland, Romania, Sweden, Switzerland, Turkey, United Kingdom</span>
    </div>`;
    }
    else if (location === "northamerica") {
      branchDetails.innerHTML = `
    <h3>Cyber Security Services in North America, Threatsys</h3>
    <div class="contact-info">
      <span>America (USA), Canada, Bahamas, Belize, Cuba, Dominica, Dominican Republic, Jamaica, Panama</span>
    </div>`;
    }
    else if (location === "southamerica") {
      branchDetails.innerHTML = `
    <h3>Cyber Security Services in South America, Threatsys</h3>
    <div class="contact-info">
      <span>Argentina, Bolivia, Brazil, Chile, Peru, Venezuela, Uruguay, Paraguay</span>
    </div>`;
    }
    else {
      branchDetails.innerHTML = `
        <h3>${branch.textContent} Branch Coming Soon.</h3>
        <div class="contact-info">
          <span>Stay tuned for updates!</span>
        </div>`;
    }

  });

});


// ============counter

// function factCounter() {
//   $('.count-text').each(function () {
//     var $this = $(this);
//     var stopValue = parseInt($this.attr('data-stop'));
//     var duration = parseInt($this.attr('data-speed'));

//     $({ countNum: $this.text() }).animate({ countNum: stopValue }, {
//       duration: duration,
//       easing: 'linear',
//       step: function () {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function () {
//         $this.text(Math.floor(this.countNum) + "+");

//         $(window).off('scroll', scrollHandler);
//       }
//     });
//   });
// }
// Scroll-triggered counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count-text");
  let triggered = false;

  if (counters.length === 0) return;

  function startCounting() {
    counters.forEach(counter => {
      let target = parseInt(counter.getAttribute("data-stop"));
      let suffix = counter.getAttribute("data-suffix") || "";
      let duration = 1200; // 1.2 sec
      let startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        let progress = Math.min((timestamp - startTime) / duration, 1);
        let value = Math.floor(progress * target);

        counter.textContent = value + suffix;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    });
  }

  function handleScroll() {
    const firstCounter = counters[0];
    const rect = firstCounter.getBoundingClientRect();

    // Trigger when section is visible on screen
    if (rect.top < window.innerHeight && !triggered) {
      triggered = true;
      startCounting();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
});


// ==============Scroll event handler counter
// function scrollHandler() {
//   var $section = $('.static-num');

//   if ($section.length === 0) return; 

//   var sectionOffset = $section.offset().top;
//   var windowHeight = $(window).height();
//   var scrollTop = $(window).scrollTop();

//   if (scrollTop > sectionOffset - windowHeight) {
//     factCounter();
//     $(window).off('scroll', scrollHandler);
//   }
// }


// $(document).ready(function() {
//   $(window).on('scroll', scrollHandler);
// });


// =========img panels slide
$('.panels .panel').on({
  mouseenter: function () {
    $(this).addClass('active').siblings().removeClass('active');
  },
  mouseleave: function () {
    // $(this).removeClass('active');
  }
});


// Initialize Swiper
// const swiper = new Swiper(".testimonialSwiper", {
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   effect: "slide",
//   speed: 600,
// });


var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: "",
    prevEl: "",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  },
});

//     // Add star ratings dynamically
//     document.querySelectorAll(".star-container").forEach(container => {
//       const rating = parseFloat(container.getAttribute("data-rating"));
//       for (let i = 1; i <= 5; i++) {
//         const star = document.createElement("span");
//         star.innerHTML = i <= Math.floor(rating) ? "★" : (i - rating === 0.5 ? "⯨" : "☆");
//         container.appendChild(star);
//       }
//     });

// ===========map section
document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.map-dot');
  const tooltips = document.querySelectorAll('.tooltip');
  const mapContainer = document.querySelector('.map-container');

  // Function to hide all tooltips
  function hideAllTooltips() {
    tooltips.forEach(tooltip => {
      tooltip.classList.remove('active');
    });
  }

  // Add event listeners to each map dot
  if (dots.length > 0) {
    dots.forEach(dot => {
      dot.addEventListener('mouseover', function () {
        // 1. Hide any currently active tooltips
        hideAllTooltips();

        // 2. Get the target tooltip ID from the data-target attribute
        const targetId = this.getAttribute('data-target');
        const targetTooltip = document.getElementById(targetId);

        // 3. Show the target tooltip if it exists
        if (targetTooltip) {
          targetTooltip.classList.add('active');
        }
      });
    });
  }

  // Add mouseleave event if the map container exists
  if (mapContainer) {
    mapContainer.addEventListener('mouseleave', hideAllTooltips);
  }
});

// =====================awards
var swiper = new Swiper(".awardsSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  speed: 1000, // smooth transition speed (in ms)
  autoplay: {
    delay: 2000, // time between slides
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 3 },
    320: { slidesPerView: 3 },
  },
});

// ========================
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".myNewsSwiper");

  // Run only if swiper element exists
  if (swiperEl) {
    const swiper = new Swiper(".myNewsSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 800, // smooth slide speed (ms)
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000, // wait 3s before next slide
        disableOnInteraction: false,
      },
      effect: "slide", // smooth sliding effect
    });

    // Pause autoplay on hover
    swiperEl.addEventListener("mouseenter", () => {
      swiper.autoplay.stop();
    });

    swiperEl.addEventListener("mouseleave", () => {
      swiper.autoplay.start();
    });
  }
});


// ----footer tab
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll('.footer .accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;

        // Close all other items in footer
        document.querySelectorAll('.footer .accordion-item').forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });

        // Toggle the clicked item
        item.classList.toggle('active');
      });
    });
  });




// =======================
// Run only if verification form exists
if (document.getElementById('verifyForm')) {

  (function () {
    const form = document.getElementById('verifyForm');
    const resultBox = document.getElementById('verifyResult');

    if (!form || !resultBox) {
      console.warn("Verification form or result box missing — script disabled.");
      return;
    }

    const KNOWN_CERT = 'THRT-2025-12345';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const certVal = (document.getElementById('certificateNo').value || '')
        .trim().toUpperCase();
      const serialVal = (document.getElementById('serialNo').value || '')
        .trim().toUpperCase();

      form.style.display = 'none';

      let resultHTML = '';
      let resultClass = '';

      if (certVal === KNOWN_CERT) {
        resultClass = 'verify-result success';
        resultHTML = `
          <img class="frm-img" src="./images/shield-grn.png" alt="Verified">
          <h3>Certificate Verified</h3>
          <p><strong>Name:</strong> Monalisha Dash</p>
          <p><strong>Course:</strong> Cybersecurity Analyst</p>
          <p><strong>Certificate No:</strong> ${certVal}</p>
          <p><strong>Issued:</strong> 12 Oct 2025</p>
          <p><strong>Status:</strong> <span class="badge badge-success">Active</span></p>
          <button class="btn" id="verifyAgainBtn">Verify Another</button>
        `;
      } else {
        resultClass = 'verify-result error';
        resultHTML = `
          <img class="frm-img" src="./images/cross.png" alt="Not Found">
          <h3>Certificate Not Found</h3>
          <p>Please check the entered Certificate No. or Serial No. and try again.</p>
          <button class="btn" id="verifyAgainBtn">Try Again</button>
        `;
      }

      resultBox.className = resultClass;
      resultBox.innerHTML = resultHTML;
      resultBox.style.display = 'flex';
      requestAnimationFrame(() => (resultBox.style.opacity = '1'));

      resultBox.querySelector('#verifyAgainBtn').addEventListener(
        'click',
        () => {
          resultBox.style.display = 'none';
          resultBox.style.opacity = '0';
          resultBox.innerHTML = '';
          form.reset();
          form.style.display = 'flex';
          document.getElementById('certificateNo').focus();
        },
        { once: true }
      );
    });
  })();
}



//  var productSwiper = new Swiper(".productSwiper", {
//     slidesPerView: 5,
//     spaceBetween: 20,
//     loop: false,
//     // autoplay: {
//     //   delay: 3000,
//     //   disableOnInteraction: false,
//     // },
//     breakpoints: {
//       1024: { slidesPerView: 5 },
//       768: { slidesPerView: 3 },
//       480: { slidesPerView: 1 },
//     },
//   });

var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  loop: false,
  // autoplay: {
  //   delay: 3000,
  //disableOnInteraction: true,
  // },
  autoplay: false,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
    },
  },

});

// Run JS only if #spotlight exists
const spotlight = document.getElementById("spotlight");

if (spotlight) {
  const closeBtn = spotlight.querySelector(".close-btn");
  const messageContainer = spotlight.querySelector("p");
  const spotlightBtn = document.querySelector(".btn-spotlight");

  const messages = [
    "Spotlight: Check out our latest article on Cybersecurity Trends!",
    "New Feature: Try our upgraded dashboard experience!",
    "Update: Investor report for March 2024 now available!",
    "Security Tip: Strengthen your passwords today!"
  ];

  let index = 0;
  let spotlightVisible = false;

  function showSpotlight() {
    if (spotlightVisible) return;

    messageContainer.textContent = messages[index];
    index = (index + 1) % messages.length;

    spotlight.classList.add("active");
    spotlightVisible = true;

    setTimeout(() => {
      spotlight.classList.remove("active");
      spotlightVisible = false;
    }, 20000);
  }

  // Close button
  closeBtn?.addEventListener("click", () => {
    spotlight.classList.remove("active");
    spotlightVisible = false;
  });

  // Manual open
  spotlightBtn?.addEventListener("click", showSpotlight);

  // Auto show after load
  window.addEventListener("load", () => {
    setTimeout(showSpotlight, 2000);
  });
}


// =======================
var swiper = new Swiper(".presenceSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
});
// =============================

document.addEventListener("DOMContentLoaded", function () {
  let swiperInstance = null;

  function toggleSlider() {
    const panels = document.querySelector('.panels');
    if (!panels) return; // STOP if not found

    const originalPanels = panels.querySelectorAll('.panel');

    // Mobile (enable Swiper)
    if (window.innerWidth <= 1199 && !swiperInstance) {
      panels.classList.add('swiper', 'mySwiper');

      // Build Swiper structure
      panels.innerHTML = `
        <div class="swiper-wrapper">
          ${Array.from(originalPanels)
          .map(panel => `<div class="swiper-slide">${panel.outerHTML}</div>`)
          .join("")}
        </div>
        <div class="swiper-pagination"></div>
      `;

      swiperInstance = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }

    // Desktop (destroy Swiper)
    else if (window.innerWidth > 1199 && swiperInstance) {
      const wrapper = panels.querySelector('.swiper-wrapper');
      const slides = wrapper ? wrapper.querySelectorAll('.swiper-slide') : [];

      panels.classList.remove('swiper', 'mySwiper');

      // Rebuild original layout
      panels.innerHTML = Array.from(slides)
        .map(slide => slide.innerHTML)
        .join("");

      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  toggleSlider();
  window.addEventListener("resize", toggleSlider);
});

// ==============


var msgSwiper = new Swiper(".msgswiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  effect: "slide",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  touchRatio: 0.4,
  resistanceRatio: 0.6,
  breakpoints: {
    1024: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
  },
});

// ========theme
const themeBtn = document.getElementById("themeToggle");
const dropdown = document.getElementById("themeDropdown");
const options = document.querySelectorAll(".theme-option");
const themeIcon = document.getElementById("themeIcon");

let currentTheme = localStorage.getItem("theme") || "auto";
applyTheme(currentTheme);

/* Toggle dropdown */
themeBtn.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

/* Close dropdown when clicked outside */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".theme-switcher")) {
    dropdown.style.display = "none";
  }
});

/* Select theme */
options.forEach(option => {
  option.addEventListener("click", () => {
    let selected = option.dataset.theme;
    applyTheme(selected);
    localStorage.setItem("theme", selected);
    dropdown.style.display = "none";
  });
});

/* Apply theme */
function applyTheme(theme) {
  document.body.classList.remove("light-theme", "dark-theme");
  options.forEach(o => o.classList.remove("active"));

  const sunSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
    `;

  const moonSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
    `;

  const autoSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
        </svg>
    `;

  // Apply theme
  if (theme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.innerHTML = sunSVG;
  }
  else if (theme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.innerHTML = moonSVG;
  }
  else {
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemDark) {
      document.body.classList.add("dark-theme");
      themeIcon.innerHTML = moonSVG;
    } else {
      document.body.classList.add("light-theme");
      themeIcon.innerHTML = sunSVG;
    }
  }

  document.querySelector(`[data-theme="${theme}"]`).classList.add("active");
}


// ==========================


/*=============================== Header Search=======================================*/
$(".search").on("click", function () {
  $(".search__popup").addClass("search-opened");
  $(".search-popup-overlay").addClass("search-popup-overlay-open");
});
$(".search-close-btn").on("click", function () {
  $(".search__popup").removeClass("search-opened");
  $(".search-popup-overlay").removeClass("search-popup-overlay-open");
});

// =========================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("mouseover", () => {

    // remove active from all
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // activate the hovered tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");

  });
});

// ==================================

// ==========================
document.addEventListener("DOMContentLoaded", function () {

  const tabScroll = document.getElementById("tabScroll");
  // const tabScroll = document.getElementById("tabScroll");
  if (!tabScroll) return;
  const tabs = tabScroll.querySelectorAll(".tab");
  const panelArea = document.getElementById("panelArea");

  // ========== TAB CLICK ==============
  function activateTab(tabEl, focus = false) {
    tabs.forEach(t => {
      const target = t.dataset.target;
      const panel = document.getElementById(target);

      if (t === tabEl) {
        t.classList.add("active");
        t.setAttribute("aria-selected", "true");
        t.setAttribute("tabindex", "0");
        if (panel) panel.hidden = false;
      } else {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
        t.setAttribute("tabindex", "-1");
        const p = document.getElementById(t.dataset.target);
        if (p) p.hidden = true;
      }
    });

    tabEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    if (focus) tabEl.focus();
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => activateTab(tab, true));
  });

  // ========== ARROW BUTTONS ==============
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  scrollLeftBtn?.addEventListener("click", () => {
    tabScroll.scrollBy({ left: -200, behavior: "smooth" });
  });

  scrollRightBtn?.addEventListener("click", () => {
    tabScroll.scrollBy({ left: 200, behavior: "smooth" });
  });

  // ========== Initialize first tab ==============
  activateTab(tabs[0]);
});


// ===================================
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const challengeCards = document.querySelectorAll('.challenge-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      challengeCards.forEach(card => {
        const industries = card.getAttribute('data-industries').split(' ');

        if (industries.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

});


// =======================

// document.querySelectorAll(".mega-menu .tab-btn").forEach((btn) => {
//   btn.addEventListener("mouseover", function () {
//     let tabId = this.getAttribute("data-tab");


//     document.querySelectorAll(".mega-menu .tab-btn").forEach(b => b.classList.remove("active"));


//     this.classList.add("active");


//     document.querySelectorAll(".mega-menu .tab-content").forEach((tab) =>
//       tab.classList.remove("active")
//     );

//     document.getElementById(tabId).classList.add("active");
//   });
// });


// =======================

document.querySelectorAll(".acc-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        const item = this.parentElement;
        const content = item.querySelector(".acc-content");

        // Close all other open items
        document.querySelectorAll(".acc-item").forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".acc-content").classList.remove("open");
                i.querySelector(".acc-content").style.maxHeight = "0px";
            }
        });

        // Toggle current item
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            content.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.classList.remove("open");
            content.style.maxHeight = "0px";
        }
    });
});

// ============header fix
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {  
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


// =====================Hamburger

const menuBtn = document.querySelector(".menu-icon");
const hamenu = document.querySelector(".hamenu");
const closeBtn = document.querySelector(".ham-close-btn");

// Toggle menu when clicking the menu icon
menuBtn?.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  hamenu.classList.toggle("open");
});

// Close menu when clicking the close button
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    menuBtn.classList.remove("open");
    hamenu.classList.remove("open");
  });
}


// Dropdown menu logic
const dropdownMenus = document.querySelectorAll('.dmenu');
const hamSubMenus = document.querySelectorAll('.ham-sub-menu');
const hamMenu = document.querySelector('.hamenu');

// Handle dropdown toggle
  dropdownMenus.forEach(dmenu => {
  dmenu.addEventListener('click', function () {
    const parentLi = this.closest('li');
    const submenu = parentLi.querySelector('.ham-sub-menu');

    if (submenu) {
      // Close other submenus
      hamSubMenus.forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove('open');
        }
      });

      submenu.classList.toggle('open');
    }
  });
});

// When menu is closed → close all submenus too
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    hamMenu.classList.remove('open'); // assuming you toggle .open for hamenu
    hamSubMenus.forEach(menu => menu.classList.remove('open'));
  });
}
