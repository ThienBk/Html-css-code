document.addEventListener(
  "DOMContentLoaded",
  function () {
    var cd1 = anime({
      targets: "h3 span",
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 600,
      direction: "alternate",
      loop: true,
      delay: function (el, i) {
        return i * 100;
      },
    });
  },
  false
);
