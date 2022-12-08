let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
let p6 = 0;
let p7 = 0;
let p8 = 0;
let p9 = 0;
let val;

let player1 = prompt("Enter Player1 name : ");
document.getElementById("play1").innerHTML = player1 + "'s turn";

let player2 = prompt("Enter Player2 name : ");
document.getElementById("play2").innerHTML = player2 + "'s turn";

function reset() {
    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    p5 = 0;
    p6 = 0;
    p7 = 0;
    p8 = 0;
    p9 = 0;

    let val1 = document.getElementById("demo1").innerHTML;
    let clr1 = val1;
    let dis1 = clr1.slice(1);
    document.getElementById("demo1").innerHTML = dis1;

    let val2 = document.getElementById("demo2").innerHTML;
    let clr2 = val2;
    let dis2 = clr2.slice(1);
    document.getElementById("demo2").innerHTML = dis2;

    let val3 = document.getElementById("demo3").innerHTML;
    let clr3 = val3;
    let dis3 = clr3.slice(1);
    document.getElementById("demo3").innerHTML = dis3;

    let val4 = document.getElementById("demo4").innerHTML;
    let clr4 = val4;
    let dis4 = clr4.slice(1);
    document.getElementById("demo4").innerHTML = dis4;

    let val5 = document.getElementById("demo5").innerHTML;
    let clr5 = val5;
    let dis5 = clr5.slice(1);
    document.getElementById("demo5").innerHTML = dis5;

    let val6 = document.getElementById("demo6").innerHTML;
    let clr6 = val6;
    let dis6 = clr6.slice(1);
    document.getElementById("demo6").innerHTML = dis6;

    let val7 = document.getElementById("demo7").innerHTML;
    let clr7 = val7;
    let dis7 = clr7.slice(1);
    document.getElementById("demo7").innerHTML = dis7;

    let val8 = document.getElementById("demo8").innerHTML;
    let clr8 = val8;
    let dis8 = clr8.slice(1);
    document.getElementById("demo8").innerHTML = dis8;

    let val9 = document.getElementById("demo9").innerHTML;
    let clr9 = val9;
    let dis9 = clr9.slice(1);
    document.getElementById("demo9").innerHTML = dis9;

    let val10 = document.getElementById("win").innerHTML;
    let clr10 = val10;
    let dis10 = clr10.slice(clr10.length);
    document.getElementById("win").innerHTML = dis10;

    let val11 = document.getElementById("demo").innerHTML;
    let clr11 = val11;
    let dis11 = clr11.slice(clr11.length);
    document.getElementById("demo").innerHTML = dis11;
}


//----- Player Button section -----
function turn1() {
    document.getElementById("demo").innerHTML = player1 + "'s Turn to play!!";
    val = 1;
    if (val == 1) {
        document.getElementById("demo1").onclick = function () {
            document.getElementById("demo1").innerHTML = "X";
            p1 = 1;
            if (p1 == 1 && p2 == 1 && p3 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p1 == 1 && p4 == 1 && p7 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p1 == 1 && p5 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo2").onclick = function () {
            document.getElementById("demo2").innerHTML = "X";
            p2 = 1;
            if (p1 == 1 && p2 == 1 && p3 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p2 == 1 && p5 == 1 && p8 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo3").onclick = function () {
            document.getElementById("demo3").innerHTML = "X";
            p3 = 1;
            if (p1 == 1 && p2 == 1 && p3 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p3 == 1 && p6 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p3 == 1 && p5 == 1 && p7 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo4").onclick = function () {
            document.getElementById("demo4").innerHTML = "X";
            p4 = 1;
            if (p4 == 1 && p5 == 1 && p6 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p1 == 1 && p4 == 1 && p7 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo5").onclick = function () {
            document.getElementById("demo5").innerHTML = "X";
            p5 = 1;
            if (p4 == 1 && p5 == 1 && p6 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p1 == 1 && p5 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p2 == 1 && p5 == 1 && p8 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p3 == 1 && p5 == 1 && p7 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo6").onclick = function () {
            document.getElementById("demo6").innerHTML = "X";
            p6 = 1;
            if (p4 == 1 && p5 == 1 && p6 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p3 == 1 && p6 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo7").onclick = function () {
            document.getElementById("demo7").innerHTML = "X";
            p7 = 1;
            if (p7 == 1 && p8 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p1 == 1 && p4 == 1 && p7 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p3 == 1 && p5 == 1 && p7 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo8").onclick = function () {
            document.getElementById("demo8").innerHTML = "X";
            p8 = 1;
            if (p7 == 1 && p8 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p2 == 1 && p5 == 1 && p8 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo9").onclick = function () {
            document.getElementById("demo9").innerHTML = "X";
            p9 = 1;
            if (p7 == 1 && p8 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p3 == 1 && p6 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            if (p1 == 1 && p5 == 1 && p9 == 1) {
                document.getElementById("win").innerHTML = player1 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
    }
}


function turn2() {
    document.getElementById("demo").innerHTML = player2 + "'s Turn to play!!";
    val = 0;
    if (val == 0) {
        document.getElementById("demo1").onclick = function () {
            document.getElementById("demo1").innerHTML = "O";
            p1 = 2;
            if (p1 == 2 && p2 == 2 && p3 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p1 == 2 && p4 == 2 && p7 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p1 == 2 && p5 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo2").onclick = function () {
            document.getElementById("demo2").innerHTML = "O";
            p2 = 2;
            if (p1 == 2 && p2 == 2 && p3 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p2 == 2 && p5 == 2 && p8 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo3").onclick = function () {
            document.getElementById("demo3").innerHTML = "O";
            p3 = 2;
            if (p1 == 2 && p2 == 2 && p3 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p3 == 2 && p6 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p3 == 2 && p5 == 2 && p7 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo4").onclick = function () {
            document.getElementById("demo4").innerHTML = "O";
            p4 = 2;
            if (p4 == 2 && p5 == 2 && p6 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p1 == 2 && p4 == 2 && p7 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo5").onclick = function () {
            document.getElementById("demo5").innerHTML = "O";
            p5 = 2;
            if (p4 == 2 && p5 == 2 && p6 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p1 == 2 && p5 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p2 == 2 && p5 == 2 && p8 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p3 == 2 && p5 == 2 && p7 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo6").onclick = function () {
            document.getElementById("demo6").innerHTML = "O";
            p6 = 2;
            if (p4 == 2 && p5 == 2 && p6 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p3 == 2 && p6 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo7").onclick = function () {
            document.getElementById("demo7").innerHTML = "O";
            p7 = 2;
            if (p7 == 2 && p8 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p1 == 2 && p4 == 2 && p7 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p3 == 2 && p5 == 2 && p7 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo8").onclick = function () {
            document.getElementById("demo8").innerHTML = "O";
            p8 = 2;
            if (p7 == 2 && p8 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p2 == 2 && p5 == 2 && p8 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
        document.getElementById("demo9").onclick = function () {
            document.getElementById("demo9").innerHTML = "O";
            p9 = 2;
            if (p7 == 2 && p8 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p3 == 2 && p6 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            if (p1 == 2 && p5 == 2 && p9 == 2) {
                document.getElementById("win").innerHTML = player2 + " is winner!!🎉";
            }
            let sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
            if (sum == 13 || sum == 14) {
                document.getElementById("win").innerHTML = "Match has been drawn!!";
            }
        }
    }
}