function newTab() {
  window.open("empty.html", "_blank");
}

gsap.registerPlugin(TextPlugin);

var secTl = gsap.timeline();

var mainTl = gsap.timeline();

gsap.set(".logo__main", {
  opacity: 0,
  x: 0,
  y: 100,
});

gsap.to(".logo__main", {
  x: 36,
  duration: 1,
  delay: 0.5,
  opacity: 1,
});

gsap.to(".logo__main", {
  duration: 1,
  delay: 1.6,
  y: 33,
});

gsap.set(".quote__first, .quote__second, .quote__third", {
  opacity: 0,
  x: 0,
  y: 55,
});

gsap.to(".quote__first, .quote__second, .quote__third", {
  opacity: 1,
  x: 36,
  duration: 1,
  stagger: 0.1,
  delay: 2,
});

gsap.to(".quote__first, .quote__second, .quote__third", {
  y: 80,
  duration: 1,
  delay: 4.3,
});

gsap.set(".first__part", {
  background: "linear-gradient(to left, transparent 0%, #fff 1000%)",
});

gsap.to(".first__part", {
  background: "linear-gradient(to left, transparent 0%, #fff 0%)",

  delay: 3,
  duration: 2,
  ease: "power2.out",
});

gsap.set(".frame", {
  background: "url(./../images/main-screen.png) no-repeat center",
});
gsap.to(".frame", {
  delay: 5.5,
  background: "none",
});

// second__part

secTl.set(".second__part", {
  background: "none",
});

secTl.to(".second__part", {
  delay: 3.5,
  duration: 3,
  backgroundImage: "url(./../images/main-screen.png)",
  backgroundSize: "cover ",
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "80%",
  backgroundPositionX: "80%",
});

secTl.to(".second__part", {
  delay: 2,
  duration: 0,
  backgroundImage: "url(./../images/frame__2.png)",
});

secTl.to(".second__part", {
  delay: 3,
  duration: 0,
  backgroundImage: "url(./../images/frame__3.png)",
});

secTl.to(".second__part", {
  delay: 3,
  duration: 0,
  backgroundImage: "url(./../images/frame__4.jpg)",
});
secTl.to(".second__part", {
  delay: 3,
  duration: 0,
  backgroundImage: "url(./../images/frame__5.png)",
});

gsap.set(".description ", {
  opacity: 0,
});

gsap.to(".description", {
  opacity: 1,
  delay: 5.3,
  duration: 2,
});

var tl = gsap.timeline();

const descr = document.querySelector(".description__main");
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const texts = [
  "“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.”",
  "“If you’re an over-cleaner, like myself, you’ll nerd \n out on all of the functions. If you avoid this chore \n at all costs, you’ll appreciate how simple \n Samsung makes it.”",
  "“Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)”",
  "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.”",
  "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
];

const images = [
  "url(./../images/main-screen.png)",
  "url(./../images/frame__2.png)",
  "url(./../images/frame__3.png)",
  "url(./../images/frame__4.jpg)",
  "url(./../images/frame__5.png)",
];

let currentIndex = 0;
let time = 5.3;

tl.to(descr, {
  duration: 0,
  delay: 5.3,
  text: {
    value: texts[0],
    delimiter: "  ",
  },
  onStart: () => {
      currentIndex = 0;
    },
});

tl.to(descr, {
  x: 10,
  duration: 1,
  delay: 2.8,
  text: {
    value: texts[1],
    delimiter: "  ",
  },
  onStart: () => {
      currentIndex = 1;
    },
  onComplete: () => {
    gsap.to(descr, {
      x: 0,
    });
  },
});

tl.to(descr, {
  x: 10,
  duration: 1,
  delay: 2.5,
  text: {
    value: texts[2],
    delimiter: "  ",
  },
  onStart: () => {
      currentIndex = 2;
    },
  onComplete: () => {
    gsap.to(descr, {
      x: 0,
    });
  },
});

tl.to(descr, {
  x: 10,
  duration: 1,
  delay: 1.8,
  text: {
    value: texts[3],
    delimiter: "  ",
  },
  onStart: () => {
      currentIndex = 3;
    },
  onComplete: () => {
    gsap.to(descr, {
      x: 0,
    });
  },
});

tl.to(descr, {
  x: 10,
  duration: 1,
  delay: 2,
  text: {
    value: texts[4],
    delimiter: "  ",
  },
  onStart: () => {
      currentIndex = 4;
    },
  onComplete: () => {
    gsap.to(descr, {
      x: 0,
    });
  },
}); 

// arrow

const arrTl = gsap.timeline();

arrTl.to(".arrow", {
  duration: 2,
  text: "2/5",
  delay: 8.3,
});

arrTl.to(".arrow", {
  duration: 2,
  text: "3/5",
  delay: 1.2,
});

arrTl.to(".arrow", {
  duration: 2,
  text: "4/5",
  delay: 1,
});

arrTl.to(".arrow", {
  duration: 2,
  text: "5/5",
  delay: 1,
});

arrowLeft.addEventListener('click', () => {
  navigateContent(-1);
})
arrowRight.addEventListener('click', () => {
  navigateContent(1);
})

let resumeTimeout;

function navigateContent(direction) {
  clearTimeout(resumeTimeout);
  tl.pause();
  secTl.pause();
  arrTl.pause();


  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = texts.length - 1;
  } else if (currentIndex >= texts.length) {
    currentIndex = 0;
  }

  // continue
  updateAll();

  resumeTimeout = setTimeout(() => {
    let newTime = 5.3 + currentIndex * 3;
    tl.seek(newTime);
    secTl.seek(newTime);
    arrTl.seek(newTime);

    tl.play();
    secTl.play();
    arrTl.play();
  }, 3000)
}

function updateAll() {
  gsap.killTweensOf(descr, ".second__part", '.arrow');

  gsap.to(descr, {
    duration: 0,
    text: {
      value: texts[currentIndex],

      delimiter: '  ',
    }, ease: "power2.out",
  })

  gsap.to(".second__part", {
    duration: 0,
    backgroundImage: images[currentIndex],
  })

  gsap.to('.arrow', {
    duration: 0,
    text: `${currentIndex + 1}/5`
  })
}

gsap.set(".quote", {
  marginBottom: 115,
});

gsap.to(".quote", {
  delay: 14.3,
  marginBottom: 90,
});

gsap.to(".quote", {
  delay: 17.3,
  marginBottom: 115,
});

gsap.set(".count", {
  opacity: 0,
});

gsap.to(".count", {
  opacity: 1,
  delay: 5.3,
  duration: 2,
});

// button__shop and hover effect

const shop__button = document.querySelector(".button__shop");

gsap.set(shop__button, {
  opacity: 0,
});

gsap.to(shop__button, {
  opacity: 1,
  delay: 5.3,
  duration: 2,
});

const shop__scale = gsap.to(shop__button, {
  duration: 1,
  scale: 1.1,
  repeat: "-1",
  yoyo: true,
  paused: true,
});

shop__scale.play();

shop__button.addEventListener("mouseenter", () => {
  shop__scale.pause();

  gsap.to(shop__button, {
    scale: 1.3,
    duration: 2,
    ease: "power2.out",
  });
});
shop__button.addEventListener("mouseout", () => {
  gsap.to(shop__button, {
    scale: 1,
    ease: "power2.out",
    duration: 2,
  });

  shop__scale.play();
});
