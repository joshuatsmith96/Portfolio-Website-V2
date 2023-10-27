let lastKnownScrollPosition = 0;
let ticking = false;
//Get all icons up here and put them into a 

function ScrollAnimations() {
  let allIcons = document.getElementsByClassName("skills-container")[0]
  
  function doSomething(scrollPos: number) {
    //------------------- NAME SCROLL AFFECTS --------------------------------
    let name = document.getElementById("gradient-name");
    let headerbar = document.getElementById("headerbar");
    let size = 90 + scrollPos / 5;
    let letterSpacing = 0 + scrollPos;

    if (scrollPos <= 180) {
      name?.setAttribute(
        "style",
        "font-size: " +
          size +
          "px;" +
          " letter-spacing: " +
          letterSpacing +
          "px;"
      );

      headerbar?.setAttribute(
        "style",
        "opacity: " + (1 - (scrollPos / 800))
      )
      //------------------- INTRO SCROLL AFFECTS --------------------------------
      let intro = document.getElementById("hero-intro");
      let intro_pos = 100 - scrollPos * 2 + "px";
      intro?.setAttribute("style", "top: " + intro_pos);

      //------------------- HERO BACKGROUND SCROLL AFFECTS --------------------------------
      let hero_background = document.getElementById("hero");
      hero_background?.setAttribute(
        "style",
        "background-image: linear-gradient(#6363f1 " +
          scrollPos / 3 +
          "%, #5252ce " +
          scrollPos / 10 +
          "%, #4242a7 " +
          scrollPos / 5 +
          "%, #37378b " +
          scrollPos +
          "%, #2a2a6d 100%)"
      );
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
  return <div className="ScrollAnimations"></div>;
}

export default ScrollAnimations;
