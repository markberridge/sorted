var reversed = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var nearly =   [1, 2, 4, 5, 9, 6, 3, 7, 8, 10, 11, 13, 12, 14, 16, 15, 17, 20, 18, 19];
var random =   [9, 15, 13, 11, 8, 20, 10, 19, 6, 4, 3, 1, 12, 17, 2, 16, 18, 14, 5, 7];

var in1 = new InsertionSort(new Canvas("in1", random));
var in2 = new InsertionSort(new Canvas("in2", nearly));
var in3 = new InsertionSort(new Canvas("in3", reversed));

function sortAllInsertionSort() {
  in1.start();
  in2.start();
  in3.start();
}

var bb1 = new BubbleSort(new Canvas("bb1", random));
var bb2 = new BubbleSort(new Canvas("bb2", nearly));
var bb3 = new BubbleSort(new Canvas("bb3", reversed));

function sortAllBubbleSort() {
  bb1.start();
  bb2.start();
  bb3.start();
}
