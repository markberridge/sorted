var reversed = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var nearly =   [1, 2, 4, 5, 9, 6, 3, 7, 8, 10, 11, 13, 12, 14, 16, 15, 17, 20, 18, 19];
var random =   [9, 15, 13, 11, 8, 20, 10, 19, 6, 4, 3, 1, 12, 17, 2, 16, 18, 14, 5, 7];

var a = new InsertionSort(new Canvas("a", nearly));
var b = new InsertionSort(new Canvas("b", random));
var c = new InsertionSort(new Canvas("c", reversed));

a.start();
b.start();
c.start();
