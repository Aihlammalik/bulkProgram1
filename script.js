//Conditons
//Ques 1
//Maximum between 2 numbers
function maximumNum() {
    var inputMax1 = document.getElementById("inputMax1").value;
    var inputMax2 = document.getElementById("inputMax2").value;
    var outputMax = document.getElementById("outputMax");
    if (inputMax1 < inputMax2) {
        outputMax.innerHTML = `${inputMax2} is greater than ${inputMax1}`
    }
    else {
        outputMax.innerHTML = `${inputMax1} is greater than ${inputMax2}`
    }
}


//Ques 2
//Maximum between 3 numbers
function maximumNumbers() {
    var num1 = document.getElementById("inputMaxi1").value;
    var num2 = document.getElementById("inputMaxi2").value;
    var num3 = document.getElementById("inputMaxi3").value;
    var outputMaxi = document.getElementById("outputMaxi");

    if (num1 > num2 && num1 > num3) {
        outputMaxi.innerHTML = `${num1} is greater than ${num2} and ${num3}`
    }
    else if (num2 > num1 && num2 > num3) {
        outputMaxi.innerHTML = `${num2} is greater than ${num1} and ${num3}`
    }
    else {
        outputMaxi.innerHTML = `${num3} is greater than ${num1} and ${num2}`
    }
}
//Ques 3
//Nature of a num
function natureChecker() {
    var inputNatureOfNum = document.getElementById("inputNature").value;
    var outputNature = document.getElementById("outputNature");
    if (inputNatureOfNum < 0) {
        outputNature.innerHTML = `${inputNatureOfNum} number is Nagetive`
    }
    else if (inputNatureOfNum > 0) {
        outputNature.innerHTML = `${inputNatureOfNum} number is Positive`
    }
    else {
        outputNature.innerHTML = `${inputNatureOfNum} number is equal to 0`
    }
}

//Ques 4 
//Number is divisible to 5 or is divible to 11
function divisible() {
    var inputDivi = document.getElementById("inputDivi").value;
    var outputDivi = document.getElementById("outputDivi");
    if (inputDivi % 5 == 0) {
        outputDivi.innerHTML = `${inputDivi} is divisible to 5`
    }

    else if (inputDivi % 11 == 0) {
        outputDivi.innerHTML = `${inputDivi} is divisible to 11`
    }
    else {
        outputDivi.innerHTML = `${inputDivi} is not divisible to 5 and 11`

    }
}

//Ques 5
//Number is even or odd
function evenOdd() {
    var inputEven = document.getElementById("inputEven").value;
    var outputEven = document.getElementById("outputEven");
    if (inputEven % 2 == 0) {
        outputEven.innerHTML = `${inputEven} is even`
    }
    else {
        outputEven.innerHTML = `${inputEven} is odd`
    }
}

//Ques 6 
//Year is leap or Not
function checkLeapYear() {
    var yearInput = document.getElementById("inputYear").value;
    var yearOutput = document.getElementById("outputYear");

    if ((0 == yearInput % 4) && (0 !== yearInput % 100) || (0 == yearInput % 400)) {
        yearOutput.innerHTML = `${yearInput} is a leap Year`
    }
    else {
        yearOutput.innerHTML = `${yearInput} is not  a leap Year`

    }
}

//Ques 7
//Check character is Alphabet or not
function checkAlphabet() {
    var inputAlphabet = document.getElementById("inputAlpha").value;
    var lowercaseConvertor = inputAlphabet.toLowerCase();
    var outputAlphabet = document.getElementById("outputAlpha");
    if (lowercaseConvertor >= 'a' && lowercaseConvertor <= 'z') {
        outputAlphabet.innerHTML = `${inputAlphabet} is an "ALPHABET"`;
    }
    else {
        outputAlphabet.innerHTML = `${inputAlphabet} is not an "ALPHABET"`;
    }
}

//Ques 8
//Check an alphabet is Vowel or consonat
function vowelCheck() {
    var inputVowel = document.getElementById("inputVowel").value;
    var lowerInput = inputVowel.toLowerCase();

    var outputVowel = document.getElementById("outputVowel");
    if ((lowerInput == "a")) {
        outputVowel.innerHTML = `${inputVowel} is vowel`;
    }
    else if ((lowerInput == "e")) {
        outputVowel.innerHTML = `${inputVowel} is vowel`;
    }
    else if ((lowerInput == "i")) {
        outputVowel.innerHTML = `${inputVowel} is vowel`;
    }
    else if ((lowerInput == "o")) {
        outputVowel.innerHTML = `${inputVowel} is vowel`;
    }
    else if ((lowerInput == "u")) {
        outputVowel.innerHTML = `${inputVowel} is vowel`;
    }
    else {
        outputVowel.innerHTML = `${inputVowel} is consonant`;
    }
}

//Ques 9
//Check a character is Alphabet,Number or special Character
function CheckCharacter() {
    var inputCharacter = document.getElementById("inputCharacter").value;
    var outputCharacter = document.getElementById("outputCharacter");
    var lowerCharacter = inputCharacter.toLowerCase();
    if (lowerCharacter >= "a" && lowerCharacter <= "z") {
        outputCharacter.innerHTML = `${inputCharacter} is an Alphabet`
    }
    else if (lowerCharacter >= 0 && lowerCharacter <= 0) {
        outputCharacter.innerHTML = `${inputCharacter} is a Digit`
    }
    else {
        outputCharacter.innerHTML = `${inputCharacter} is a special Character`
    }
}


//programs of Strings 
//Program 1
//length of a string
function stringLength() {
    var inputOfString = document.getElementById("inputLength").value;
    var lengthOfString = inputOfString.length;
    var outputLength = document.getElementById("outputLength");
    outputLength.innerHTML = `${inputOfString} has legth = ${lengthOfString}`
}



















//program 3
//concate two strings
function concateStrings() {
    var input1 = document.getElementById("inputconcate1").value;
    var input2 = document.getElementById("inputconcate2").value;
    var concatedOutput = document.getElementById("outConcate");
    concatedOutput.innerHTML = input1 + input2 + 'are concated';

}

//Program 5
//Comparison of two strings
function comparison() {
    var inputC1 = document.getElementById("inputString1").value;
    var inputC2 = document.getElementById("inputstring2").value;
    var compare = inputC1.localeCompare(inputC2);
    var outputC = document.getElementById("outputComparison");
    outputC.innerHTML = `${compare}`
}

//program 6
//Convert lowercase to uppercase
function lowerCase() {
    var inputlower = document.getElementById("inputLower").value;
    var outputlower = document.getElementById("outputLower");
    var lower = inputlower.toUpperCase();
    console.log(lower);
    outputlower.innerHTML = `${lower} is in uppercase`
}


//program 7
//Convert uppercase to lowercase
function upperCase() {
    var inputUpper = document.getElementById("inputUpper").value;
    var outputUpper = document.getElementById("outputUpper");
    var upper = inputUpper.toLowerCase();
    console.log(upper);
    outputUpper.innerHTML = `${upper} is in lowercase`
}


//program 8
//Toggle case
function toggle() {
    var inputToggle = document.getElementById("inputToggle").value;
    var outputToggle = document.getElementById("outputToggle");
    var upperCase = inputToggle.toUpperCase();
    var lowerCase = inputToggle.toLowerCase();

    if (inputToggle == upperCase) {
        outputToggle.innerHTML = `${upperCase} is toggled ${lowerCase}`
    }
    else if (inputToggle == lowerCase) {
        outputToggle.innerHTML = `${lowerCase} is toggled to ${upperCase}`
    }
}


//program 9
//program to count total number of vowel and consonats in a string
function vowelCount() {
    var inputVowelCount = document.getElementById("inputCountV").value;
    var outputVowelCount = document.getElementById("outputCountV");
    var length = inputVowelCount.length;

    var storedValue = inputVowelCount.match(/[aeiou]/gi).length;
    var consonants = length - storedValue;
    outputVowelCount.innerHTML = `${inputVowelCount} contains ${storedValue} vowel remaining are consonants which is ${consonants}`
}

//program10
//program to count total number of total number of words in a string
function stringCountWord() {
    var inputString = document.getElementById("inputCount").value;
    var stringLength = inputString.length;
    var outputString = document.getElementById("outputCount");
    outputString.innerHTML = `${inputString} contains ${stringLength} words`
}

//program 11
//program to find reverse of a string
function reverseString() {
    var inputReverse = document.getElementById("inputReverse").value;
    var outputReverse = document.getElementById("outputReverse");
    var reverseString = inputReverse.split("").reverse().join("");
    outputReverse.innerHTML = `${inputReverse} is reversed to ${reverseString}`
}


//program 13 
// program to find first occurrence of a character in a given string.
function firstCharacter() {
    var inputFirst = document.getElementById("inputFirst").value;

    var outputFirst = document.getElementById("outputFirst");
    var characterFirst = inputFirst.slice(0, 1).toUpperCase();
    outputFirst.innerHTML = `The first character of ${inputFirst} is  ${characterFirst}`
}




//programs of Array
//program 1
//program to read and print elements of array
function arrayPrint() {
    var arrayInput = [document.getElementById("inputArray").value.split(",")];
    var arrayOutput = document.getElementById("outputArray");

    for (let index = 0; index < arrayInput.length; index++) {
        var storedValue = arrayInput[index];
        console.log(storedValue);
        arrayOutput.innerHTML = `entered array is ${storedValue}`
    }
}


//program 2
//program to Print Negative Elements of Array
function negativeIdentify() {
    var inputNegative = document.getElementById("inputArrayNeg").value.split(",");
    var outputNegative = document.getElementById("outputArrayNeg");
    //var myArray = prompt("enter numbers").split(",");
    var minusArray = inputNegative.filter((item) => {
        return item < 0;
    })
    outputNegative.innerHTML = `${inputNegative} contains ${minusArray} as negative elements`
}


//program 3
//program to find sum of all elements in array

function arraySum() {
    //var arrayInput = parseInt(prompt("enter sting").split(","))
    var arrayInput = document.getElementById("inputArraySum").value.split(",");
    var outputArray = document.getElementById("outputArraySum");
    var sum = arrayInput.reduce(function (a, b) {        //read this
        return a + b;
    }, 0);
    outputArray.innerHTML = `${sum}`
}

//program 4
//program to find max and min in array
function arrayMaxMin() {
    var outputArray = document.getElementById("outputMaxMin");
   var max = prompt("enter numbers").split(" ")
    outputArray.innerHTML = "open console log"
    console.log("full array is", max + " " + "\n" + "the max value is", Math.max(...max) + "\n" + "the min value is", Math.min(...max));
}

//program 5
//program to find even or odd in an array
function evenOddNumbersCount() {
    //var numbers=prompt("enter numbers").split(" ")
    var numbers = document.getElementById("inputEvenOdd").value.split(",");
    var output = document.getElementById("outputEvenOdd");
var evenCount=oddCount=0
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenCount++;
       
    }
     else{
        oddCount++
     }
}
//console.log("total even number",evenCount+ "\n" +"total odd numbers are",oddCount)
output.innerHTML = `total even number ${evenCount} total odd numbers ${oddCount}`
}


//program 6
//program to find total num of negative num
function totalNegative() {
    var inputNegative = document.getElementById("inputTotalNeg").value.split(",");
var outputNegative = document.getElementById("outputTotalNeg");
var negativeCount = positiveCount = 0 ;
for (let i = 0; i < inputNegative.length; i++) {
   if (inputNegative[i] < 0) {
    negativeCount++
   }
    else{
        positiveCount++
    }
    outputNegative.innerHTML = `total negative number in array are ${negativeCount} total positive array are ${positiveCount}`
}
}


//program 7
//program to copy array from anther array

function copyArray() {
    var inputCopy = document.getElementById("inputCopy").value.split(",");
    var outputCopy = document.getElementById("outputCopy");
var copyArray = inputCopy.slice();
outputCopy.innerHTML = `${copyArray} is copied from ${inputCopy} `

}

//program 8
//program to insert an element in an array.


function insert() {
var inputInsert = document.getElementById("inputInsert").value.split(",");
var outputInsert = document.getElementById("outputInsert");
    var inputInsert2 = [];
    var pushed = inputInsert2.push(inputInsert);
    console.log(inputInsert2);
    outputInsert.innerHTML = `${inputInsert} is inserted to ${inputInsert2}`
}

//program 9
//program to remove an array
function removeElement() {
    var input1 = document.getElementById("inputRemove1").value.split(",");
    var input2 = document.getElementById("inputRemove2").value;
    var outputArray = document.getElementById("outputRemove");
    var splicedArray = input1.splice(input2,1);
    outputArray.innerHTML = `${input1} is in removed form`
}



//loops and math
//program1
//natural numbers printer
function naturalNumber() {
    var inputNatural = document.getElementById("inputloopNatural").value;
    var outputNatural = document.getElementById("outputloopNatural");
    var counter = 1 ;
    for (let index = 1; index < inputNatural ; index++) {
        counter++
    }
    console.log(counter);
}