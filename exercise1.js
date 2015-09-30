///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var sum = function (num1, num2) {

  return: num1 + num2;

};

sum (3,4);
7


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function (a,b,c) {
  total = a + b + c;
  array3 = [a,b,c];
  number = array3.length;
  return total / number;
};

avg (5,10,15);
10


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function (stringOfText) {

  // console.log ('the string of text is ' + stringOfText.length + ' characters long.');
  return stringOfText.length;
};

getLength ("Andrew");
// the string of text is 6 characters long.
6


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.


var greaterThan = function (y,z) {

  if (z>y) {
    return true
  }
  else {
    return false
  };

};

greaterThan (2,3);
true

greaterThan (2,2);
false



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.


var greet = function (name) {

  return "Hello, " + name + "!";
};

greet ("Andrew");
"Hello, Andrew!"



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function (w1,w2,w3,w4) {

return "If the " + w1 + " win the game, they will play the " + w2 + "in the next round " + w3 + " ,but if the " + w4 + " win, they will play at home."; 

};

madlib ("Cubs", "Cardinals", "on the road", "Pirates");
"If the Cubs win the game, they will play the Cardinalsin the next round on the road ,but if the Pirates win, they will play at home."


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////