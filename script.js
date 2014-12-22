var canvas = document.getElementById("a");
var ctx = canvas.getContext("2d");

var sorted =   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var reversed = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var nearly =   [1, 2, 4, 5, 9, 6, 3, 7, 8, 10, 11, 13, 12, 14, 16, 15, 17, 18, 19, 21, 22, 20, 23, 25, 24];
var random =   [9, 15, 13, 11, 8, 20, 10, 19, 6, 24, 4, 3, 1, 12, 17, 21, 23, 2, 16, 18, 25, 14, 5, 22, 7];

// ######
// ### Insertion Sort
// ######

var InsertionSort = function(context, array) {
  this.ctx = context;
  this.a = array;
  this.i = 1;
  this.k = 1;
  this.sorted = false;
  this.delay = 1000;

  renderArray(this.ctx, this.a);
}

InsertionSort.prototype.step = function(auto) {
  
  console.log("step called, i=" + this.i + ", k=" + this.k);
  console.log("a=" + this.a);

  // Iterative algorithm:
  // for (var i = 1; i < a.length; i++) {
  //   for (var k = i; k > 0 && a[k] < a[k-1]; k--) {
  //     swap(a, k, k - 1);
  //    }
  // }

  if(this.a[this.k] < this.a[this.k-1]) {
    swap(this.a, this.k, this.k - 1);
    renderArray(this.ctx, this.a);
  }
  
  while (this.k > 0 && this.a[this.k] > this.a[this.k-1]) {
	  this.k--;
  }
  
  if(this.k == 0) {
    if(this.i < this.a.length) {
      this.i++;
      this.k = this.i;
    }
    else {
      console.log("Sorted");
      return;
    }
  }
  
  if(auto) {
    setTimeout((function() {
      this.start(true);
    }).bind(this), 40);
  }
}

InsertionSort.prototype.start = function() {
  this.step(true);
}


//######
//### Canvas - needs encapsulating
//######

function swap(a, x, y) {
  console.log("Swapping " + a[y] + " and " + a[x]);
  var z = a[y];
  a[y] = a[x];
  a[x] = z;
}

function renderArray(ctx, a) {
  for (var i = 0; i < a.length; i++) {
    renderBar(ctx, i, a[i]);
  }
}

function renderBar(ctx, index, length) {
  var scale = 7;
  var x = scale * 2;
  var y = (index + 1) * (scale + 1);
  var width = length * scale;
  var height = scale;
  // fill bar
  ctx.fillRect(x, y, width, height);
  // clear after bar
  ctx.clearRect (x + width, y, canvas.width - (x + width), height);
}

//######

var sort = new InsertionSort(ctx, random);
sort.start();