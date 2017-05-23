function calc () {
    console.log("Calc");
     var N = document.getElementById("n").value;
     var a = document.getElementById("a").value;
     var r = document.getElementById("r").value;

    var x = [];
    for (var n = 0; n < N; n++) {
        if (document.getElementById("arithmetic").checked) {
            x[n] = (parseInt(a) + (n*parseInt(r)));
        } else {
            x[n] = (parseInt(a) * (Math.pow(r,n)));
        }
    }
    document.getElementById("display").innerHTML = x;
}

