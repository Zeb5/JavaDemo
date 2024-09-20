function addition(){
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = x + y;
    var output = document.getElementById("output");
    output.innerHTML = z;
}
