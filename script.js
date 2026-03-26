window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let scrollValue = window.scrollY;

    if (scrollValue > 150) {  // 150px scroll ke baad fix hoga
        navbar.classList.add("fixed-navbar");
    } else {
        navbar.classList.remove("fixed-navbar");
    }
});
// progress bar ------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  const items = document.querySelectorAll(".progress-item");

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const item = entry.target;
        const percent = parseInt(item.dataset.percent);
        const fill = item.querySelector(".progress-fill");
        const counter = item.querySelector(".progress-percent");

        let start = null;
        const duration = 2000; // total animation time (2 sec)

        function animate(timestamp) {

          if (!start) start = timestamp;
          let progress = timestamp - start;

          let percentage = Math.min((progress / duration) * percent, percent);

          fill.style.width = percentage + "%";
          counter.textContent = Math.floor(percentage) + "%";

          if (progress < duration) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);

        obs.unobserve(item);
      }

    });

  }, { threshold: 0.5 });

  items.forEach(item => observer.observe(item));

});
// owl carousel ------------------------------------------------------------------------------------------------------------
  $(document).ready(function () {
        $('.our-clients .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,  
            dots: false,
            autoplay: true,
            slideTransition: 'linear',
            responsive: {
                0: { items: 1 },
                575: { items: 2 },
                768: { items: 2 },
                992: { items: 3 },
                1200: { items: 4 }
            }
        });
    });
// aos animation 
AOS.init();