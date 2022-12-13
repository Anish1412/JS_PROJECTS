one = () => {
    document.querySelector("#demo").innerHTML += 1;
}
two = () => {
    document.querySelector("#demo").innerHTML += 2;
}
three = () => {
    document.querySelector("#demo").innerHTML += 3;
}
add = () => {
    document.querySelector("#demo").innerHTML += "+";
}
four = () => {
    document.querySelector("#demo").innerHTML += 4;
}
five = () => {
    document.querySelector("#demo").innerHTML += 5;
}
six = () => {
    document.querySelector("#demo").innerHTML += 6;
}
sub = () => {
    document.querySelector("#demo").innerHTML += "-";
}
seven = () => {
    document.querySelector("#demo").innerHTML += 7;
}
eight = () => {
    document.querySelector("#demo").innerHTML += 8;
}
nine = () => {
    document.querySelector("#demo").innerHTML += 9;
}
mul = () => {
    document.querySelector("#demo").innerHTML += "*";
}
zero = () => {
    document.querySelector("#demo").innerHTML += 0;
}
point = () => {
    document.querySelector("#demo").innerHTML += ".";
}
sqrt = () => {
    document.querySelector("#demo").innerHTML += "√";
}
cbrt = () => {
    document.querySelector("#demo").innerHTML += "3√";
}
square = () => {
    document.querySelector("#demo").innerHTML += "^2";
}
equal = () => {
    let arr11;
    var a = document.querySelector("#demo").innerHTML;
    var arr1 = a.split("+");
    var arr2 = a.split("-");
    var arr3 = a.split("*");
    var arr4 = a.split("/");
    var arr5 = a.split("^");
    var arr6 = a.split("√");
    var arr7 = a.split("3√");

    if (a.includes("+") && a.includes("*")) {
        let arr = a.split("+");
        if (arr[0].includes("*")) {
            arr11 = arr[0].split("*");
        }
        else {
            arr11 = arr[1].split("*");
        }
        let mul = arr11[0] * arr11[1];
        if (arr[0].includes("*")) {
            arr[0] = mul;
        }
        else {
            arr[1] = mul;
        }
        let total = parseFloat(arr[0]) + parseFloat(arr[1]);
        if (isNaN(total) == false) {
            document.querySelector("#demo").innerHTML = total;
        }
    }

    else if (arr1.length == 2 || arr2.length == 2 || arr3.length == 2 || arr4.length == 2 || arr5.length || arr6.length == 2 || arr7.length == 2 || arr8.length == 2) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]);
        var y = Math.pow(arr5[0], 2);
        var z = Math.sqrt(arr6[1]);
        var z1 = Math.cbrt(arr7[1]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
        if (isNaN(y) == false) {
            document.querySelector("#demo").innerHTML = y;
        }
        if (isNaN(z) == false) {
            document.querySelector("#demo").innerHTML = z;
        }
        if (isNaN(z1) == false) {
            document.querySelector("#demo").innerHTML = z1;
        }
        if (isNaN(a) == false) {
            document.querySelector("#demo").innerHTML = a;
        }
    }
    if (arr1.length == 3 || arr2.length == 3 || arr3.length == 3 || arr4.length == 3) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]) + parseFloat(arr1[2]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]) - parseFloat(arr2[2]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]) * parseFloat(arr3[2]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]) / parseFloat(arr4[2]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
    }
    if (arr1.length == 4 || arr2.length == 4 || arr3.length == 4 || arr4.length == 4) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]) + parseFloat(arr1[2]) + parseFloat(arr1[3]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]) - parseFloat(arr2[2]) - parseFloat(arr2[3]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]) * parseFloat(arr3[2]) * parseFloat(arr3[3]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]) / parseFloat(arr4[2]) / parseFloat(arr4[3]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
    }
    if (arr1.length == 5 || arr2.length == 5 || arr3.length == 5 || arr4.length == 5) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]) + parseFloat(arr1[2]) + parseFloat(arr1[3]) + parseFloat(arr1[4]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]) - parseFloat(arr2[2]) - parseFloat(arr2[3]) - parseFloat(arr2[4]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]) * parseFloat(arr3[2]) * parseFloat(arr3[3]) * parseFloat(arr3[4]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]) / parseFloat(arr4[2]) / parseFloat(arr4[3]) / parseFloat(arr4[4]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
    }
    if (arr1.length == 6 || arr2.length == 6 || arr3.length == 6 || arr4.length == 6) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]) + parseFloat(arr1[2]) + parseFloat(arr1[3]) + parseFloat(arr1[4]) + parseFloat(arr1[5]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]) - parseFloat(arr2[2]) - parseFloat(arr2[3]) - parseFloat(arr2[4]) - parseFloat(arr2[5]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]) * parseFloat(arr3[2]) * parseFloat(arr3[3]) * parseFloat(arr3[4]) * parseFloat(arr3[5]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]) / parseFloat(arr4[2]) / parseFloat(arr4[3]) / parseFloat(arr4[4]) / parseFloat(arr4[5]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
    }
    if (arr1.length == 7 || arr2.length == 7 || arr3.length == 7 || arr4.length == 7) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]) + parseFloat(arr1[2]) + parseFloat(arr1[3]) + parseFloat(arr1[4]) + parseFloat(arr1[5]) + parseFloat(arr1[6]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]) - parseFloat(arr2[2]) - parseFloat(arr2[3]) - parseFloat(arr2[4]) - parseFloat(arr2[5]) - parseFloat(arr2[6]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]) * parseFloat(arr3[2]) * parseFloat(arr3[3]) * parseFloat(arr3[4]) * parseFloat(arr3[5]) * parseFloat(arr3[6]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]) / parseFloat(arr4[2]) / parseFloat(arr4[3]) / parseFloat(arr4[4]) / parseFloat(arr4[5]) / parseFloat(arr4[6]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
    }
    if (arr1.length == 8 || arr2.length == 8 || arr3.length == 8 || arr4.length == 8) {
        var u = parseFloat(arr1[0]) + parseFloat(arr1[1]) + parseFloat(arr1[2]) + parseFloat(arr1[3]) + parseFloat(arr1[4]) + parseFloat(arr1[5]) + parseFloat(arr1[6]) + parseFloat(arr1[7]);
        var v = parseFloat(arr2[0]) - parseFloat(arr2[1]) - parseFloat(arr2[2]) - parseFloat(arr2[3]) - parseFloat(arr2[4]) - parseFloat(arr2[5]) - parseFloat(arr2[6]) - parseFloat(arr2[7]);
        var w = parseFloat(arr3[0]) * parseFloat(arr3[1]) * parseFloat(arr3[2]) * parseFloat(arr3[3]) * parseFloat(arr3[4]) * parseFloat(arr3[5]) * parseFloat(arr3[6]) * parseFloat(arr3[7]);
        var x = parseFloat(arr4[0]) / parseFloat(arr4[1]) / parseFloat(arr4[2]) / parseFloat(arr4[3]) / parseFloat(arr4[4]) / parseFloat(arr4[5]) / parseFloat(arr4[6]) / parseFloat(arr4[7]);
        if (isNaN(u) == false) {
            document.querySelector("#demo").innerHTML = u;
        }
        if (isNaN(v) == false) {
            document.querySelector("#demo").innerHTML = v;
        }
        if (isNaN(w) == false) {
            document.querySelector("#demo").innerHTML = w;
        }
        if (isNaN(x) == false) {
            document.querySelector("#demo").innerHTML = x;
        }
    }
}
div = () => {
    document.querySelector("#demo").innerHTML += "/";
}
remove = () => {
    var a = document.querySelector("#demo").innerHTML;
    var b = a.split("");
    b.splice(a.length - 1, 1);
    var c = b.join("");
    document.querySelector("#demo").innerHTML = c;
}
erase = () => {
    var a = document.querySelector("#demo").innerHTML;
    var b = a.slice(a.length);
    document.querySelector("#demo").innerHTML = b;
}