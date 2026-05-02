let highestZ = 1;

function start() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("music").play();
}

class Paper {
  constructor(paper) {
    this.paper = paper;
    this.holding = false;
    this.startX = 0;

    this.init();
  }

  init() {

    // mobile swipe
    this.paper.addEventListener("touchstart", (e) => {
      this.holding = true;
      this.startX = e.touches[0].clientX;
      this.paper.style.zIndex = highestZ++;
    });

    this.paper.addEventListener("touchend", (e) => {
      let endX = e.changedTouches[0].clientX;

      if (endX - this.startX > 100) {
        this.paper.classList.add("swiped");
      }

      this.holding = false;
    });

    // pc swipe
    this.paper.addEventListener("mousedown", (e) => {
      this.holding = true;
      this.startX = e.clientX;
      this.paper.style.zIndex = highestZ++;
    });

    window.addEventListener("mouseup", (e) => {
      if (!this.holding) return;

      if (e.clientX - this.startX > 100) {
        this.paper.classList.add("swiped");
      }

      this.holding = false;
    });
  }
}

document.querySelectorAll(".paper").forEach(p => new Paper(p));