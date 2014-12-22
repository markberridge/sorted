// ######
// ### Insertion Sort
// ######
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
  }
  
  while (this.k > 0 && this.canvas.a[this.k] > this.canvas.a[this.k - 1]) {
    this.k--;
  }

  if(this.k == 0) {
    // TODO highlight element i
    this.i++
    if(this.i < this.canvas.a.length) {
      this.k = this.i;
    }
    else {
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


//######
//### Canvas
//######
var Canvas = function(id, array) {
  // TODO check element with id exists and is a canvas...
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.a = array;
  this.renderArray();
}

Canvas.prototype.swap = function (x, y) {
  console.log("Swapping " + this.a[y] + " and " + this.a[x]);
  var z = this.a[y];
  this.a[y] = this.a[x];
  this.a[x] = z;
  this.renderArray();
}

Canvas.prototype.renderArray = function() {
  for (var i = 0; i < this.a.length; i++) {
    this.renderBar(i, this.a[i]);
  }
}

Canvas.prototype.renderBar = function(index, length) {
  var scale = 7;
  var x = scale * 2;
  var y = (index + 1) * (scale + 1);
  var width = length * scale;
  var height = scale;
   // fill bar
  this.ctx.fillRect(x, y, width, height);
  // clear after bar
  this.ctx.clearRect (x + width, y, this.canvas.width - (x + width), height);
}

//######
var reversed = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var nearly =   [1, 2, 4, 5, 9, 6, 3, 7, 8, 10, 11, 13, 12, 14, 16, 15, 17, 20, 18, 19];
var random =   [9, 15, 13, 11, 8, 20, 10, 19, 6, 4, 3, 1, 12, 17, 2, 16, 18, 14, 5, 7];

var a = new InsertionSort(new Canvas("a", nearly));
var b = new InsertionSort(new Canvas("b", random));
var c = new InsertionSort(new Canvas("c", reversed));

a.start();
b.start();
c.start();