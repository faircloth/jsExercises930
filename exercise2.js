// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if (a>b) {
      return a
    }
    else if (b>a){
      return b
    }
    else {
      return "numbers are equal"
    };
};

max (3,4);
4
max (3,3);
"numbers are equal"

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var maxOfThree = function (a,b,c){
    return Math.max(a,b,c);
};

maxOfThree (1,2,3);
3

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var isVowel = function (char) {

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
return true
}
else {
return false
};
};

isVowel (a);
true
isVowel (c);
false

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
}

// split
// join


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

var reverse = function (stringX) {

arrayX = stringX.split("");
reverseX = arrayX.reverse();
return reverseX.join("");


};

reverse ("jag testar");
"ratset gaj"

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

longWord;
["Baseball", "Basketball", "Volleyball", "Cross-Country"]

function filterLongWords(words, i){
  longWord.filter(function(word) {
  return word.length >9;
});
["Basketball", "Volleyball", "Cross-Country"]
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}