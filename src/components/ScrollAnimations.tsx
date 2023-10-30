let lastKnownScrollPosition = 0;
let ticking = false;
//Get all icons up here and put them into a

function ScrollAnimations() {
  function doSomething(scrollPos: number) {
    //------------------- NAME SCROLL AFFECTS --------------------------------
    let name = document.getElementById("gradient-name");
    let headerbar = document.getElementById("headerbar");
    let size = 90 + scrollPos / 5;
    let letterSpacing = 0 + scrollPos;

    if (scrollPos <= 300) {
      name?.setAttribute(
        "style",
        "font-size: " +
          size +
          "px;" +
          " letter-spacing: " +
          letterSpacing +
          "px;"
      );

      headerbar?.setAttribute("style", "opacity: " + (1 - scrollPos / 800));
      //------------------- INTRO SCROLL AFFECTS --------------------------------
      let intro = document.getElementById("hero-intro");
      let intro_pos = 100 - scrollPos * 2 + "px";
      intro?.setAttribute("style", "top: " + intro_pos);

      //------------------- HERO BACKGROUND SCROLL AFFECTS --------------------------------
      // let square1 = document.getElementById("square1")
      // let square2 = document.getElementById("square2")
      // let square3 = document.getElementById("square3")
      // let opacity = 0 + (scrollPos / 50)
      // let bottom_positioning1 = 20 - (scrollPos / 6)
      // let left_positioning1 = 10 - (scrollPos / 6)
      // let bottom_positioning2 = 40 - (scrollPos / 4)
      // let left_positioning2 = 20 - (scrollPos / 4)
      // let bottom_positioning3 = 60 - (scrollPos / 2)
      // let left_positioning3 = 40 - (scrollPos / 2)
      // square1?.setAttribute("style", "bottom: " + bottom_positioning1 + "%; left: " + left_positioning1 + "%; opacity: " + opacity + ";")
      // square2?.setAttribute("style", "bottom: " + bottom_positioning2 + "%; left: " + left_positioning2 + "%; opacity: " + opacity + ";" )
      // square3?.setAttribute("style", "bottom: " + bottom_positioning3 + "%; left: " + left_positioning3 + "%; opacity: " + opacity + ";")
      //ScrollPos, Square, bottom pos, left pos, speed
      if (window.innerWidth < 960) {
        moveSquare(scrollPos, "1", 20, 10, 2);
        moveSquare(scrollPos, "2", 23, 10, 2.5);
        moveSquare(scrollPos, "3", 26, 10, 3);
        moveSquare(scrollPos, "4", 20, 10, 3.5);
      } else {
        moveSquare(scrollPos, "1", 0, 85, 5);
        moveSquare(scrollPos, "2", 0, 82, 4.5);
        moveSquare(scrollPos, "3", 0, 79, 4);
        moveSquare(scrollPos, "4", 0, 88, 3.5);
      }
      
    }
  }

  let moveSquare = (scrollPos: number, squarenum: string, bottom_pos: number, left_pos: number, speed: number) => {
    let square = document.getElementById("square" + squarenum);
    let bottom_positioning = bottom_pos - scrollPos / speed;
    let left_positioning = left_pos - scrollPos / speed;
    let opacity = 0 + (scrollPos / 50);

    square?.setAttribute("style", "bottom: " + bottom_positioning + "%; left: " + left_positioning + "%; opacity: " + opacity + ";")
  };

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
