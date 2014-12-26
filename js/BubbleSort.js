var BubbleSort = function(canvas) {
  this.canvas = canvas;
  this.i = -1;
  this.k = this.canvas.a.length - 1;
  this.delay = 40;
  this.timer = null;
  this.canvas.canvas.addEventListener("click", (function(){
    this.start();
  }).bind(this));
}

BubbleSort.prototype.step = function(auto) {
  console.log("BubbleSort.step() called, i=" + this.i + ", k=" + this.k);
  console.log("a=" + this.canvas.a);

  // Iterative algorithm:
  // for (var i = -1; i < a.length; i++) {
  //   for (var k = a.length; k > i + 1; k--) {
  //     if(a[k] < a[k-1]) {
  //       swap(k, k - 1);
  //     }
  //   }
  // }

  if(this.canvas.a[this.k] < this.canvas.a[this.k - 1]) {
    this.canvas.swap(this.k, this.k - 1);
    this.canvas.highlight(this.k - 1);
  }

  while (this.k > this.i + 1 && this.canvas.a[this.k] >= this.canvas.a[this.k - 1]) {
    this.k--;
  }

  if(this.k == this.i + 1) {
    this.i++
    this.canvas.highlight(this.i);

    if(this.i < this.canvas.a.length - 1) {
      this.k = this.canvas.a.length - 1;
    }
    else {
      this.canvas.clearHighlights();
      console.log("Sorted");
      return;
    }
  }

  if(auto) {
    this.timer = setTimeout((function() {
      this.step(true);
    }).bind(this), this.delay);
  }
}

BubbleSort.prototype.reset = function() {
  clearTimeout(this.timer);
  this.canvas.reset();
  this.i = -1;
  this.k = this.canvas.a.length - 1;
}

BubbleSort.prototype.start = function() {
  if(this.timer) {
    this.reset();
  }
  this.step(true);
}
