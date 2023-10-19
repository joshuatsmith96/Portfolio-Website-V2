function Hero() {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos:any) {
    //Get Name Element
    let name = document.getElementById("gradient-name");
    let size = 90 + (scrollPos / 2);
    let letterSpacing = 0 + (scrollPos / 2);
    let blurvalue = 0 + (scrollPos / 60)
    name?.setAttribute("style", "font-size: " + size + "px;" + " letter-spacing: " + letterSpacing + "px;")
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
    <div className="Hero">
      <h1 className="gradient-text" id="gradient-name">Joshua</h1>
    </div>
  );
}

export default Hero;
