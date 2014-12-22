var InsertionSort = function(canvas) {
  this.canvas = canvas;
  this.i = 1;
  this.k = 1;
  this.delay = 40;
  this.timer = null;
  this.canvas.canvas.addEventListener("click", (function(){
    this.start();
  }).bind(this));
}

InsertionSort.prototype.step = function(auto) {
  console.log("step called, i=" + this.i + ", k=" + this.k);
  console.log("a=" + this.canvas.a);
  this.started = true;

  // Iterative algorithm:
  // for (var i = 1; i < a.length; i++) {
  //   for (var k = i; k > 0 && a[k] < a[k-1]; k--) {
  //     swap(a, k, k - 1);
  //    }
  // }

  if(this.canvas.a[this.k] < this.canvas.a[this.k - 1]) {
    this.canvas.swap(this.k, this.k - 1);
    this.canvas.highlight(this.k);
  }
  
  while (this.k > 0 && this.canvas.a[this.k] > this.canvas.a[this.k - 1]) {
    this.k--;
  }

  if(this.k == 0) {
    this.i++

    if(this.i < this.canvas.a.length) {
      this.k = this.i;
      this.canvas.highlight(this.k);
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

InsertionSort.prototype.reset = function() {
  clearTimeout(this.timer);
  this.canvas.reset();
  this.i = 1;
  this.k = 1;
}

InsertionSort.prototype.start = function() {
  if(this.timer) {
    this.reset();
  }
  this.step(true);
}
