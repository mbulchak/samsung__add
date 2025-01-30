function newTab() {
  window.open("empty.html", "_blank");
}

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

gsap.set(".second__part", {
  background: "none",
});

gsap.to(".second__part", {
  delay: 3.5,
  duration: 3,
  backgroundImage: "url(./../images/main-screen.png)",
  backgroundSize: "cover ",
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "80%",
  backgroundPositionX: "80%",
  // backgroundPositionX: "0%",
  // backgroundPositionY: "center",
});

gsap.to(".second__part", {
  delay: 8.3,
  duration: 0,
  backgroundImage: "url(./../images/frame__2.png)"
})

gsap.to(".second__part", {
  delay: 11.3,
  duration: 0,
  backgroundImage: "url(./../images/frame__3.png)"
})

gsap.to(".second__part", {
  delay: 14.3,
  duration: 0,
  backgroundImage: "url(./../images/frame__4.jpg)"
})
gsap.to(".second__part", {
  delay: 17.3,
  duration: 0,
  backgroundImage: "url(./../images/frame__5.png)"
})

gsap.set(".description ", {
  opacity: 0,
});

gsap.to(".description", {
  opacity: 1,
  delay: 5.3,
  duration: 2,
});

gsap.registerPlugin(TextPlugin);

var tl = gsap.timeline();

// tl.to(".description__main", {
//   dalay: 11.3,
//   x: 10,
//   text: 'Hi hi hihihhihihihihiihi'
// })
// tl.set(".description__main", {x: 10})

// gsap.to(".description__main", {
//   delay: 5.3,
//   duration: 2,
// x: 0,
// text: "“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.”",
// })

//dfd
// gsap.to(".description__main", {
//   delay: 8.3,
//   x: 0,
// });

// gsap.to(".description__main", {
//   delay: 8.3,
//   duration: 2,
//   text: "“If you’re an over-cleaner, like myself, you’ll nerd \n out on all of the functions. If you avoid this chore \n at all costs, you’ll appreciate how simple \n Samsung makes it.”",
// });

// gsap.to('.description__main', {
//   x: 10,
//   delay: 11.3,
// })
// gsap.to('.description__main', {
//   x: 0,
//   delay: 11.4,
//   text: 'hdfadsjasdadsadsasda'
// })

/* gsap.to(".description__main", {
  delay: 8.3,
  duration: 2,
  text: "“If you’re an over-cleaner, like myself, you’ll nerd \n out on all of the functions. If you avoid this chore \n at all costs, you’ll appreciate how simple \n Samsung makes it.”",

}); */

const descr = document.querySelector(".description__main");

gsap.to(descr, {
  duration: 1,
  delay: 5.3,
  text: {
    value:
      "“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.”",
    delimiter: "  ",
  },
});

gsap.to(descr, {
  duration: 2,
  delay: 8.3,
  text: {
    value:
      "“If you’re an over-cleaner, like myself, you’ll nerd \n out on all of the functions. If you avoid this chore \n at all costs, you’ll appreciate how simple \n Samsung makes it.”",
    delimiter: "  ",
  },
});

/* gsap.fromTo(descr, {
  x: 10,
  duration: 2,
  delay: 8.3,
  text: {
    value:
      "“If you’re an over-cleaner, like myself, you’ll nerd \n out on all of the functions. If you avoid this chore \n at all costs, you’ll appreciate how simple \n Samsung makes it.”",
    delimiter: "  ",
  },
}, {
  x: 0,
}) */


gsap.to(descr, {
  // x: 0,
  duration: 1,
  delay: 11.3,
  text: {
    value:
      "“Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)” ",
    delimiter: "  ",
  },
});

gsap.to(descr, {
  duration: 1,
  delay: 14.3,
  text: {
    value:
      "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.” ",
    delimiter: "  ",
  },
});

gsap.to(descr, {
  duration: 1,
  delay: 17.3,
  text: {
    value:
      "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
    delimiter: "  ",
  },
});

gsap.set('.quote', {
  marginBottom: 115,
})
gsap.to('.quote', {
  delay: 14.3,
  marginBottom: 90,
})
gsap.to('.quote', {
  delay: 17.3,
  marginBottom: 115,
})

gsap.set(".count", {
  opacity: 0,
});

gsap.to(".count", {
  opacity: 1,
  delay: 5.3,
  duration: 2,
});

gsap.to(".arrow", {
  duration: 2,
  text: "2/5",
  delay: 8.3,
});

gsap.to(".arrow", {
  duration: 2,
  text: "3/5",
  delay: 11.3,
});

gsap.to(".arrow", {
  duration: 2,
  text: "4/5",
  delay: 14.3,
});

gsap.to(".arrow", {
  duration: 2,
  text: "5/5",
  delay: 17.3,
});

// button__shop

gsap.set(".button__shop", {
  opacity: 0,
});

gsap.to(".button__shop", {
  opacity: 1,
  delay: 5.3,
  duration: 2,
});
gsap.to(".button__shop", {
  duration: 1,
  scale: 1.1,
  repeat: "-1",
  yoyo: true,
});
