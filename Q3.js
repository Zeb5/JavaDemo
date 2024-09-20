function grade(){
    var Analysis = parseFloat(document.getElementById("Analysis").value);
    var Design = parseFloat(document.getElementById("Design").value);
    var Implementation = parseFloat(document.getElementById("Implementation").value);
    var Evaluation = parseFloat(document.getElementById("Evaluation").value);
    var total = Analysis + Design + Implementation + Evaluation;
    
}