var InsertionSort = function(canvas) {
  this.canvas = canvas;
  this.i = 1;
  this.k = 1;
  this.delay = 40;
}

InsertionSort.prototype.step = function(auto) {
  console.log("step called, i=" + this.i + ", k=" + this.k);
  console.log("a=" + this.canvas.a);

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
      this.canvas.highlight(this.canvas.a.length - 1);
      console.log("Sorted");
      return;
    }
  }

  if(auto) {
    setTimeout((function() {
      this.step(true);
    }).bind(this), this.delay);
  }
}

InsertionSort.prototype.start = function() {
  this.step(true);
}
