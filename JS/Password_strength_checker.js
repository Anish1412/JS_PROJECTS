let pass = document.getElementById("pass");

function myfunc() {
    if (pass.type == "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
    if (document.getElementById("demo2").getAttribute("class") == "fa-solid fa-eye") {
        document.getElementById("demo2").setAttribute("class", "fa-solid fa-eye-slash");
    }
    else {
        document.getElementById("demo2").setAttribute("class", "fa-solid fa-eye");
    }
}

function increase() {
    let val = pass.value;
    if (val == "") {
        document.getElementById("pro").value = 0;
        let h3 = document.getElementById("demo").innerHTML;
        let sto = h3;
        let dis = sto.slice(sto.length);
        document.getElementById("demo").innerHTML = dis;
    }

    let allow1 = val.includes("a");
    let allow2 = val.includes("b");
    let allow3 = val.includes("c");
    let allow4 = val.includes("d");
    let allow5 = val.includes("e");
    let allow6 = val.includes("f");
    let allow7 = val.includes("g");
    let allow8 = val.includes("h");
    let allow9 = val.includes("i");
    let allow10 = val.includes("j");
    let allow11 = val.includes("k");
    let allow12 = val.includes("l");
    let allow13 = val.includes("m");
    let allow14 = val.includes("n");
    let allow15 = val.includes("o");
    let allow16 = val.includes("p");
    let allow17 = val.includes("q");
    let allow18 = val.includes("r");
    let allow19 = val.includes("s");
    let allow20 = val.includes("t");
    let allow21 = val.includes("u");
    let allow22 = val.includes("v");
    let allow23 = val.includes("w");
    let allow24 = val.includes("x");
    let allow25 = val.includes("y");
    let allow26 = val.includes("z");
    let allow27 = val.includes("@");
    let allow28 = val.includes("#");
    let allow29 = val.includes("0");
    let allow30 = val.includes("1");
    let allow31 = val.includes("2");
    let allow32 = val.includes("3");
    let allow33 = val.includes("4");
    let allow34 = val.includes("5");
    let allow35 = val.includes("6");
    let allow36 = val.includes("7");
    let allow37 = val.includes("8");
    let allow38 = val.includes("9");
    let allow39 = val.includes("€");
    let allow40 = val.includes("£");
    let allow41 = val.includes("¥");
    let allow42 = val.includes("$");
    let a1 = val.includes("A");
    let a2 = val.includes("B");
    let a3 = val.includes("C");
    let a4 = val.includes("D");
    let a5 = val.includes("E");
    let a6 = val.includes("F");
    let a7 = val.includes("G");
    let a8 = val.includes("H");
    let a9 = val.includes("I");
    let a10 = val.includes("J");
    let a11 = val.includes("K");
    let a12 = val.includes("L");
    let a13 = val.includes("M");
    let a14 = val.includes("N");
    let a15 = val.includes("O");
    let a16 = val.includes("P");
    let a17 = val.includes("Q");
    let a18 = val.includes("R");
    let a19 = val.includes("S");
    let a20 = val.includes("T");
    let a21 = val.includes("U");
    let a22 = val.includes("V");
    let a23 = val.includes("W");
    let a24 = val.includes("X");
    let a25 = val.includes("Y");
    let a26 = val.includes("Z");

    if (allow1 == true || allow2 == true || allow3 == true || allow4 == true || allow5 == true || allow6 == true || allow7 == true || allow8 == true || allow9 == true || allow10 == true || allow11 == true || allow12 == true || allow13 == true || allow14 == true || allow15 == true || allow16 == true || allow17 == true || allow18 == true || allow19 == true || allow20 == true || allow21 == true || allow22 == true || allow23 == true || allow24 == true || allow25 == true || allow26 == true || a1 == true || a2 == true || a3 == true || a4 == true || a5 == true || a6 == true || a7 == true || a8 == true || a9 == true || a10 == true || a11 == true || a12 == true || a13 == true || a14 == true || a15 == true || a16 == true || a17 == true || a18 == true || a19 == true || a20 == true || a21 == true || a22 == true || a23 == true || a24 == true || a25 == true || a26 == true) {
        document.getElementById("pro").value = 20;
        document.getElementById("pro").style.accentColor = "red";
        document.getElementById("demo").innerHTML = "Very Weak password!!";
    }
    if (allow27 == true || allow28 == true) {
        document.getElementById("pro").value = 40;
        document.getElementById("pro").style.accentColor = "red";
        document.getElementById("demo").innerHTML = "Weak password!!";
    }
    if (allow29 == true || allow30 == true || allow31 == true || allow32 == true || allow33 == true || allow34 == true || allow35 == true || allow36 == true || allow37 == true || allow38 == true) {
        document.getElementById("pro").value = 60;
        document.getElementById("pro").style.accentColor = "gold";
        document.getElementById("demo").innerHTML = "Medium password!!";
    }
    if (allow39 == true) {
        document.getElementById("pro").value = 80;
        document.getElementById("pro").style.accentColor = "green";
        document.getElementById("demo").innerHTML = "Strong password!!";
    }
    if (allow40 == true) {
        document.getElementById("pro").value = 80;
        document.getElementById("pro").style.accentColor = "green";
        document.getElementById("demo").innerHTML = "Strong password!!";
    }
    if (allow41 == true) {
        document.getElementById("pro").value = 80;
        document.getElementById("pro").style.accentColor = "green";
        document.getElementById("demo").innerHTML = "Strong password!!";
    }
    if (allow42 == true) {
        document.getElementById("pro").value = 80;
        document.getElementById("pro").style.accentColor = "green";
        document.getElementById("demo").innerHTML = "Strong password!!";
    }
    if (allow39 == true && allow40 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strong password!!";
    }
    if (allow39 == true && allow41 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strong password!!";
    }
    if (allow39 == true && allow42 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strong password!!";
    }
    if (allow40 == true && allow41 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strong password!!";
    }
    if (allow40 == true && allow42 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strong password!!";
    }
    if (allow41 == true && allow42 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strong password!!";
    }
    if (allow39 == true && allow40 == true && allow41 == true && allow42 == true) {
        document.getElementById("pro").value = 100;
        document.getElementById("pro").style.accentColor = "lime";
        document.getElementById("demo").innerHTML = "Very Strongest password!!";
    }
}