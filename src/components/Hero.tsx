function Hero() {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos: any) {
    //------------------- NAME SCROLL AFFECTS --------------------------------
    let name = document.getElementById("gradient-name");
    let size = 90 + (scrollPos / 5);
    let letterSpacing = 0 + scrollPos;

    if (scrollPos <= 253){
      console.log("moving!")
      name?.setAttribute(
        "style",
        "font-size: " + size + "px;" + " letter-spacing: " + letterSpacing + "px;"
      );
      //------------------- INTRO SCROLL AFFECTS --------------------------------
      let intro = document.getElementById("hero-intro")
      let intro_pos = 100 - (scrollPos*2) + "px"
      intro?.setAttribute(
        "style",
        "top: " + intro_pos
      )
  
      //------------------- HERO BACKGROUND SCROLL AFFECTS --------------------------------
      let hero_background = document.getElementById("hero");
      hero_background?.setAttribute(
        "style",
        "background-image: linear-gradient(#6363f1 " +
          scrollPos / 15 +
          "%, #5252ce " +
          scrollPos / 10 +
          "%, #4242a7 " +
          scrollPos / 5 +
          "%, #37378b " +
          scrollPos +
          "%, #2a2a6d 100%)"
      );
    } else {
      console.log("not moving")
    }

  }

  document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });

  return (
    <div className="Hero" id="hero">
      <p id="hero-intro">Hello, I'm</p>
      <h1 className="gradient-text" id="gradient-name">
        Joshua
      </h1>
    </div>
  );
}

export default Hero;
