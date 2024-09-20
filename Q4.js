//not working -- needs fixing!!!!

var TotalNum = document.getElementById("total_nums");
var sum = document.getElementById("sum");
var mean = document.getElementById("mean")
var values = new Array(TotalNum);

function numFunctions() {
    Average();
    Total();
}

function Total(){
    for (var i = 0; i < TotalNum; i++) {
        values[i] = parseFloat(prompt("Enter Value " + (i + 1) + ":"));
    }
    var total = 0;
    for (var i = 0; i < TotalNum; i++) {
        total += values[i];
    }
}

function Average(){
    var average = total / TotalNum;
}

var result_sum = ("Total: " + total);
var result_mean = ("Mean: " + average);
sum.innerHTML = result_sum;
mean.innerHTML = result_mean;