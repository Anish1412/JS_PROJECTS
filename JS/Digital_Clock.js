var time = setInterval(function () {
    var d = new Date();
    if (d.getHours() >= 12) {
        var t = "PM";
    }
    else {
        var t = "AM";
    }
    if (d.getHours() < 10) {
        document.getElementById("demo").innerHTML = "0" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + t;
    }
    else if (d.getMinutes() < 10) {
        document.getElementById("demo").innerHTML = d.getHours() + ":0" + d.getMinutes() + ":" + d.getSeconds() + ":" + t;
    }
    else if (d.getSeconds() < 10) {
        document.getElementById("demo").innerHTML = d.getHours() + ":" + d.getMinutes() + ":0" + d.getSeconds() + ":" + t;
    }
    else {
        document.getElementById("demo").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + t;
    }
});

function changeColor(element) {
    var currentColor = element.style.backgroundColor;
    if (currentColor == "black") {
        element.style.backgroundColor = "dodgerblue";
        document.getElementById("demo").style.color = "black";
        document.getElementById("demo").style.fontWeight = "bold";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "dodgerblue";
        document.getElementById("demo2").style.color = "dodgerblue";
        document.getElementById("demo3").style.color = "dodgerblue";
    }
    else if (currentColor == "dodgerblue") {
        element.style.backgroundColor = "lime";
        element.style.color = "black";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "lime";
        document.getElementById("demo2").style.color = "lime";
        document.getElementById("demo3").style.color = "lime";
        document.getElementById("para").style.color = "black";
    }
    else if (currentColor == "lime") {
        element.style.backgroundColor = "red";
        element.style.color = "black";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "red";
        document.getElementById("demo2").style.color = "red";
        document.getElementById("demo3").style.color = "red";
    }
    else if (currentColor == "red") {
        element.style.backgroundColor = "royalblue";
        element.style.color = "black";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "royalblue";
        document.getElementById("demo2").style.color = "royalblue";
        document.getElementById("demo3").style.color = "royalblue";
    }
    else if (currentColor == "royalblue") {
        element.style.backgroundColor = "orange";
        element.style.color = "black";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "orange";
        document.getElementById("demo2").style.color = "orange";
        document.getElementById("demo3").style.color = "orange";
    }
    else if (currentColor == "orange") {
        element.style.backgroundColor = "purple";
        element.style.color = "black";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "purple";
        document.getElementById("demo2").style.color = "purple";
        document.getElementById("demo3").style.color = "purple";
    }
    else if (currentColor == "purple") {
        element.style.backgroundColor = "violet";
        element.style.color = "black";
        element.style.border = "15px solid black";
        document.getElementById("demo1").style.color = "violet";
        document.getElementById("demo2").style.color = "violet";
        document.getElementById("demo3").style.color = "violet";
    }
    else {
        element.style.backgroundColor = "black";
        document.getElementById("demo").style.color = "dodgerblue";
        element.style.border = "15px solid blue";
        document.getElementById("demo1").style.color = "dodgerblue";
        document.getElementById("demo2").style.color = "dodgerblue";
        document.getElementById("demo3").style.color = "dodgerblue";
    }
}

function date() {
    var d = new Date();
    if (d.getMonth() == 0) {
        var m = "January";
    }
    else if (d.getMonth() == 1) {
        var m = "February";
    }
    else if (d.getMonth() == 2) {
        var m = "March";
    }
    else if (d.getMonth() == 3) {
        var m = "April";
    }
    else if (d.getMonth() == 4) {
        var m = "May";
    }
    else if (d.getMonth() == 5) {
        var m = "June";
    }
    else if (d.getMonth() == 6) {
        var m = "July";
    }
    else if (d.getMonth() == 7) {
        var m = "August";
    }
    else if (d.getMonth() == 8) {
        var m = "September";
    }
    else if (d.getMonth() == 9) {
        var m = "October";
    }
    else if (d.getMonth() == 10) {
        var m = "November";
    }
    else {
        var m = "December";
    }
    document.getElementById("para").innerHTML = "Date : " + d.getDate() + " " + m + " " + d.getFullYear();
    document.getElementById("para").style.fontSize = "20px";
    document.getElementById("para").style.display = "block";
    document.getElementById("para").style.fontFamily = "Times new Roman";
    /* document.getElementById("demo").style.paddingTop = "22px";
    document.getElementById("demo").style.marginTop = "25px";
    document.getElementById("demo").style.fontWeight = "bold"; */
}

function day() {
    var d = new Date();
    if (d.getDay() == 0) {
        var day = "Sunday";
    }
    else if (d.getDay() == 1) {
        var day = "Monday";
    }
    else if (d.getDay() == 2) {
        var day = "Tuesday";
    }
    else if (d.getDay() == 3) {
        var day = "Wednesday";
    }
    else if (d.getDay() == 4) {
        var day = "Thursday";
    }
    else if (d.getDay() == 5) {
        var day = "Friday";
    }
    else {
        var day = "Saturday";
    }
    document.getElementById("para").innerHTML = "Day : " + day;
    document.getElementById("para").style.fontSize = "20px";
    document.getElementById("para").style.display = "block";
    document.getElementById("para").style.fontFamily = "Times new Roman";
}

function hide() {
    document.getElementById("para").style.display = "none";
}