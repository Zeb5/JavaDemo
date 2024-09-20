function grade(){
    var Analysis = parseFloat(document.getElementById("Analysis").value);
    var Design = parseFloat(document.getElementById("Design").value);
    var Implementation = parseFloat(document.getElementById("Implementation").value);
    var Evaluation = parseFloat(document.getElementById("Evaluation").value);
    var total = Analysis + Design + Implementation + Evaluation;
    if (total >= 0 && total < 4) {
        var grade = "U";
    } else if (total >= 4 && total < 13) {
        var grade = "G";
    } else if (total >= 13 && total < 22) {
        var grade = "F";
    } else if (total >= 22 && total < 31) {
        var grade = "E";
    } else if (total >= 31 && total < 41) {
        var grade = "D";
    } else if (total >= 41 && total < 54) {
        var grade = "C";
    } else if (total >= 54 && total < 67) {
        var grade = "B";
    } else if (total >= 67 && total < 80) {
        var grade = "A";
    } else if (total >= 80) {
        var grade = "A*";
    } else {
        var grade = "ERROR";
    }
    var output = document.getElementById("output");
    output.innerHTML = grade;
}