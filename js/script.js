window.addEventListener('load', function() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('loader-hidden');
        
        // Remove loader from DOM after transition
        loader.addEventListener('transitionend', function() {
            this.remove();
        });
    }, 100);
});

const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
});

 // Initialize Locomotive Scroll
 const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.05
});

// Update scroll on page load
window.addEventListener('load', () => {
    scroll.update();
});

// Register GSAP ScrollTrigger plugin with Locomotive Scroll
scroll.on('scroll', ScrollTrigger.update);
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

ScrollTrigger.addEventListener('refresh', () => scroll.update());
ScrollTrigger.refresh();

gsap.registerPlugin(ScrollTrigger);

    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".icon-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".icon-container",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from("h3, p", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "h3, p",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    document.addEventListener("DOMContentLoaded", function() {
      gsap.from(".bg-white", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power3.out"
      });
    });


    // contact us section

     // Animate the form container
     gsap.from("form", {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "power2.out",
      delay: 0.5
  });

  // Animate the image container
  gsap.from(".bg-cover", {
      duration: 1,
      opacity: 0,
      x: 50,
      ease: "power2.out",
      delay: 1
  });

  // footer section

    // GSAP Animation
    gsap.from("footer div", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });