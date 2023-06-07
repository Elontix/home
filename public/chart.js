var vals = [10, 30, 20, 10, 30];
function makeChart(arr) {
  var sum = arr.reduce((a, b) => a + b),
    currentPercent = 0;

  for (var i = 0; i < arr.length; i++) {
    currentPercent += (arr[i] / sum) * 100;

    var dur = 3 - (1.5 * i) / arr.length,
      ez = "power3",
      c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    pieChart.prepend(c);

    gsap.set(c, {
      attr: {
        "data-val": Math.round((arr[i] / sum) * 100), //arr[i],
        "data-sw": 15 * arr.length - 10 * i,
        cx: 200,
        cy: 200,
        r: gsap.getProperty("#center", "r"),
        stroke:
          "hsl(" +
          (306 + 66 * i) +
          "," +
          (100 - (i / arr.length) * 70) +
          "%," +
          (65 - (i / arr.length) * 50) +
          "%)", // a nice assortment
        // stroke:'hsl('+(250*(i/arr.length))+',100%,55%)', // bright colors
        // stroke:'hsl(150,90%,'+(80-i/arr.length*75)+'%)', // minty monochrome
        "stroke-width": 16 * arr.length - 10 * i,
      },
    });

    gsap.fromTo(
      c,
      { drawSVG: 0 },
      { drawSVG: "0% " + currentPercent + "%", duration: dur, ease: ez }
    );

    c.addEventListener("pointerenter", (e) => {
      var t = e.currentTarget;
      gsap.to(t, {
        ease: "expo",
        attr: { "stroke-width": gsap.getProperty(t, "data-sw") + 8 },
      });
      gsap.to(nTxt, {
        ease: "power2.inOut",
        opacity: 1,
        attr: { fill: gsap.getProperty(t, "stroke") },
        innerHTML: gsap.getProperty(t, "data-val") + "%",
        snap: "innerHTML",
      });
    });

    c.addEventListener("pointerleave", (e) => {
      var t = e.currentTarget;
      gsap.to(t, {
        ease: "expo",
        attr: { "stroke-width": gsap.getProperty(t, "data-sw") },
      });
      gsap.to(nTxt, { opacity: 0, ease: "power2.inOut" });
    });

    if (i <= arr.length - 2) {
      var shade = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polygon"
      );
      pieChart.append(shade);
      gsap.fromTo(
        shade,
        {
          attr: { points: "243,200 350,200 350,210" },
          opacity: 0.4 - (i / arr.length) * 0.35,
          pointerEvents: "none",
          transformOrigin: "200 200",
        },
        {
          rotate: (currentPercent / 100) * 360,
          duration: dur,
          ease: ez,
        }
      );
    }
  }
  gsap.set("#pieChart", { rotate: -90, svgOrigin: "200 200" });
}

makeChart(vals);
