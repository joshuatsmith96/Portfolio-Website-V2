let lastKnownScrollPosition = 0;
let ticking = false;
//Get all icons up here and put them into a

function ScrollAnimations() {
  function doSomething(scrollPos: number) {
    //------------------- NAME SCROLL AFFECTS --------------------------------
    let name = document.getElementById("gradient-name");
    let headerbar = document.getElementById("headerbar");
    let nameLocation:any;
    if (window.innerWidth < 1200){
      nameLocation = 90;
    } else {
      nameLocation = 140;
    }
    let size = nameLocation + scrollPos / 5;
    let letterSpacing = 0 + scrollPos;
    let nameOpacity = 1 - (scrollPos / 80);

    if (scrollPos <= 600) {
      name?.setAttribute(
        "style",
        "font-size: " +
          size +
          "px;" +
          " letter-spacing: " +
          letterSpacing +
          "px; opacity: "  + nameOpacity
      );

      headerbar?.setAttribute("style", "opacity: " + (1 - scrollPos / 800));
      //------------------- INTRO SCROLL AFFECTS --------------------------------
      let intro = document.getElementById("hero-intro");
      let intro_pos;
      if (window.innerWidth < 1200){
        intro_pos = 100 - scrollPos * 2 + "px";
      } else {
        intro_pos = 200 - scrollPos * 2 + "px";
      }
      
      intro?.setAttribute("style", "top: " + intro_pos);

      //------------------- HERO BACKGROUND SCROLL AFFECTS --------------------------------
      //ScrollPos, Square, bottom pos, left pos, speed
      if (window.innerWidth < 960) {
        moveSquare(scrollPos, "1", 20, 10, 2);
        moveSquare(scrollPos, "2", 23, 10, 2.5);
        moveSquare(scrollPos, "3", 26, 10, 3);
        moveSquare(scrollPos, "4", 28, 10, 3.5);
      } else {
        moveSquare(scrollPos, "1", 20, 85, 5);
        moveSquare(scrollPos, "2", 20, 82, 4.5);
        moveSquare(scrollPos, "3", 20, 79, 4);
        moveSquare(scrollPos, "4", 20, 88, 3.5);
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
