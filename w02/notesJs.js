console.log(displayStuff());

console.log("the last log function used a return value");

console.log(executeChapter2Exercises());
console.log(executeChapter3Exercises());
console.log(executeChapter4Exercises());

function displayStuff() {

    console.log("My displayExercises function was called!");
    return "the console.log function was executed";
}

function triangle() {

    //exercise 1
    var hashtagString = "#";
    for (var i = 0; i < 7; i++) {
        console.log(hashtagString);
        hashtagString += "#";
    }

    return "finished with triangle";
}

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var output = "";

        if (i % 3 == 0) { //divisible by 3
            output += "Fizz";
        }
        if (i % 5 == 0) { //divisible by 5
            output += "Buzz";
        }
            console.log(output || i);
    }
    return "finished with fizz buzz";
}

function chessboard() {
    var size = 8;
    var square = " ";
    var board = "";

    for (var h = 0; h < size; h++) {
        for (var w = 0; w < size; w++) {
            if (h % 2 == 0) {
                square = (w % 2 == 0 ? " " : "#");
            } else {
                square = (w % 2 == 0 ? "#" : " ");
            }
            board += square;
        }
        board += "\n";
    }
    console.log(board);
    
    return "finished with chessboard";
}

function executeChapter2Exercises() {
    console.log(triangle());
    console.log(fizzBuzz());
    console.log(chessboard());

    return "finished executing chapter 2 exercises";
}

function minimum(a, b) {
    var minFunction = (a, b) => (a < b ? a : b);
    console.log(minFunction(a, b));

    console.log("finished with minimum");
}

function recursion(number) {
    var zero = "even";
    var one = "odd";

    function isEven(number) {
        if (number == 0) { return true; }
        else if (number == 1) { return false; }
        else if (number < 0) { return isEven(-number)}
        else { return isEven(number -2); }
    }

    console.log(isEven(50));
    // → true
    console.log(isEven(75));
    // → false
    console.log(isEven(-1));
    // → ??

    console.log("finished with recursion");
}

function beanCounting() {


    console.log("finished with bean counting");
}

function executeChapter3Exercises() {
    console.log(minimum(3, 7));
    console.log(recursion()); // I need to practice recursion more
    console.log(beanCounting());

    return "finished executing chapter 3 exercises";
}

function executeChapter4Exercises() {


    return "finished executing chapter 4 exercises";
}