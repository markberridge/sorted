var Canvas = function(id, array) {
  // TODO check element with id exists and is a canvas...
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.a0 = array.slice(0);
  this.a = array.slice(0);
  this.scale = 7;
  this.renderArray();
}

Canvas.prototype.swap = function (x, y) {
  console.log("Swapping " + this.a[y] + " and " + this.a[x]);
  var z = this.a[y];
  this.a[y] = this.a[x];
  this.a[x] = z;
  this.renderBar(x);
  this.renderBar(y);
}

Canvas.prototype.renderArray = function() {
  for (var i = 0; i < this.a.length; i++) {
    this.renderBar(i);
  }
}

Canvas.prototype.renderBar = function(index) {
  var length = this.a[index];
  var x = this.scale * 2 + 1;
  var y = (index + 1) * (this.scale + 1);
  var width = length * this.scale;
  var height = this.scale;
   // fill bar
   this.ctx.fillStyle = "black";
   this.ctx.fillRect(x, y, width, height);
  // clear after bar
  this.ctx.clearRect (x + width, y, this.canvas.width - (x + width), height);
}

Canvas.prototype.highlight = function(index) {
  var x = this.scale * 1;
  var y = (index + 1) * (this.scale + 1);
  var width = this.scale;
  var height = this.scale;
  this.clearHighlights();
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(x, y, width, height);
}

Canvas.prototype.clearHighlights = function() {
  var x = this.scale * 1;
  var y = 0;
  var width = this.scale;
  var height = this.canvas.height;
  this.ctx.clearRect (x, y, width, height);
}

Canvas.prototype.reset = function() {
  this.a = this.a0.slice(0);
  this.renderArray();
}
