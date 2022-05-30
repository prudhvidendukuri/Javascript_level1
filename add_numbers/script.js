function addition() {

    var a = parseFloat(document.getElementById("first").value);

    var b = parseFloat(document.getElementById("second").value);
    var sum = a + b;
    // var sum = firstNumber + secondNumber;
    document.getElementById("result").value = sum;
}
