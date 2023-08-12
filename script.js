// Script for Are you a student?
let schoolUniform = document.getElementById("schoolUniform")
let schoolIdCard = document.getElementById("schoolIdCard")
let yesns = document.getElementById("yesns")
let nons = document.getElementById("nons")

yesns.onclick = function () {

    schoolUniform.textContent = "58500"
    schoolIdCard.textContent = "2500"

    yesns.checked = true;
    nons.checked = false;
    totalbill2.innerText = ""
}


nons.onclick = function () {

    schoolUniform.textContent = ""
    schoolIdCard.textContent = ""
    yesns.checked = false;
    nons.checked = true;
    totalbill2.innerText = ""
}


// Script for Are you interested in school event?

let schoolEvent = document.getElementById("schoolEvent")
let ybse = document.getElementById("ybse")
let nbse = document.getElementById("nbse")

ybse.onclick = function () {

    schoolEvent.textContent = "15000"

    ybse.checked = true;
    nbse.checked = false;
    totalbill2.innerText = ""
}


nbse.onclick = function () {

    schoolEvent.textContent = ""

    ybse.checked = false;
    nbse.checked = true;
    totalbill2.innerText = ""
}

// script for total bill 2

let voc = document.getElementById("voc")
let club = document.getElementById("club")
let phonics = document.getElementById("phonics")
let it = document.getElementById("it")
let wb = document.getElementById("wb")
let dl = document.getElementById("dl")
let totalbill2 = document.getElementById("totalbill2")
let totalbill2btn = document.getElementById("totalbill2btn")

totalbill2btn.onclick = function () {
    let res = parseInt(voc.innerText) + parseInt(club.innerText) + parseInt(phonics.innerText) + parseInt(it.innerText) + parseInt(wb.innerText) + parseInt(dl.innerText) + parseInt(schoolUniform.innerText) + parseInt(schoolIdCard.innerText) + parseInt(schoolEvent.innerText)
    totalbill2.innerText = res;

    if (schoolUniform.innerText === "" && schoolIdCard.innerText === "" && schoolEvent.innerText === "") {
        let res = parseInt(voc.innerText) + parseInt(club.innerText) + parseInt(phonics.innerText) + parseInt(it.innerText) + parseInt(wb.innerText) + parseInt(dl.innerText)
        totalbill2.innerText = res.toString()

    }

    else if (schoolEvent.innerText === "") {
        let res = parseInt(voc.innerText) + parseInt(club.innerText) + parseInt(phonics.innerText) + parseInt(it.innerText) + parseInt(wb.innerText) + parseInt(dl.innerText) + parseInt(schoolUniform.innerText) + parseInt(schoolIdCard.innerText)
        totalbill2.innerText = res;

    }

    else if (schoolUniform.innerText === "" && schoolIdCard.innerText === "") {
        let res = parseInt(voc.innerText) + parseInt(club.innerText) + parseInt(phonics.innerText) + parseInt(it.innerText) + parseInt(wb.innerText) + parseInt(dl.innerText) + parseInt(schoolEvent.innerText)
        totalbill2.innerText = res;

    }

}

//Bill for school bus

let oneWay = document.getElementById("oneWay")
let twoWays = document.getElementById("twoWays")
let ekoro = document.getElementById("ekoro")
let agege = document.getElementById("agege")
let fagba = document.getElementById("fagba")
let okoOba = document.getElementById("oko-Oba")
let totalSchBus = document.getElementById("totalSchBus")
let route1 = document.getElementById("route1")
let noOfWays = document.getElementById("noOfWays")
let amountPayableSchBus = document.querySelector("#amountPayableSchBus")
let amountPayableSchBus1 = document.querySelector("#amountPayableSchBus1")

//Script for route
okoOba.onclick = function () {
    route1.innerText = "Oko-Oba"
    amountPayableSchBus.innerText = ""

}

agege.onclick = function () {
    route1.innerText = "Agege"
    amountPayableSchBus.innerText = ""
}

ekoro.onclick = function () {
    route1.innerText = "Ekoro"
    amountPayableSchBus.innerText = ""
}

fagba.onclick = function () {
    route1.innerText = "Fagba"
    amountPayableSchBus.innerText = ""
}

//Script for number of ways
oneWay.onclick = function () {
    noOfWays.innerText = "One Way"
    amountPayableSchBus.innerText = ""
}

twoWays.onclick = function () {
    noOfWays.innerText = "Two Way"
    amountPayableSchBus.innerText = ""
}



totalSchBus.onclick = function () {
    if (route1.textContent === "Oko-Oba" && noOfWays.textContent === "One Way") {
        amountPayableSchBus.textContent = "10000"
        amountPayableSchBus1.textContent = "10000"


    }

    else if (route1.textContent === "Oko-Oba" && noOfWays.textContent === "Two Way") {
        amountPayableSchBus.textContent = "20000"
        amountPayableSchBus1.textContent = "20000"
    }

    else if (route1.textContent === "Fagba" && noOfWays.textContent === "One Way") {
        amountPayableSchBus.textContent = "15000"
        amountPayableSchBus1.textContent = "15000"
    }

    else if (route1.textContent === "Fagba" && noOfWays.textContent === "Two Way") {
        amountPayableSchBus.textContent = "30000"
        amountPayableSchBus1.textContent = "30000"
    }

    else if (route1.textContent === "Agege" && noOfWays.textContent === "One Way") {
        amountPayableSchBus.textContent = "20000"
        amountPayableSchBus1.textContent = "20000"
    }

    else if (route1.textContent === "Agege" && noOfWays.textContent === "Two Way") {
        amountPayableSchBus.textContent = "40000"
        amountPayableSchBus1.textContent = "40000"
    }

    else if (route1.textContent === "Ekoro" && noOfWays.textContent === "One Way") {
        amountPayableSchBus.textContent = "25000"
        amountPayableSchBus1.textContent = "25000"
    }

    else if (route1.textContent === "Ekoro" && noOfWays.textContent === "Two Way") {
        amountPayableSchBus.textContent = "50000"
        amountPayableSchBus1.textContent = "50000"
    }

    else if (route1.textContent === "Fagba" && noOfWays.textContent === "Two Way") {
        amountPayableSchBus.textContent = "50000"
        amountPayableSchBus1.textContent = "50000"
    }
    else if (route1.textContent === "Fagba" && noOfWays.textContent === "One Way") {
        amountPayableSchBus.textContent = "15000"
        amountPayableSchBus1.textContent = "15000"
    }

    else if (route1.innerHTML === "" || noOfWays.innerHTML === "") {
        amountPayableSchBus1.textContent = "0";
    }

    else {
        amountPayableSchBus.textContent = ""
    }
}

// Script for interested in extension?

let extension = document.getElementById("extension")
let yine = document.getElementById("yine")
let nine = document.getElementById("nine")

yine.onclick = function () {

    extension.textContent = 30000;

    yine.checked = true;
    nine.checked = false;
}


nine.onclick = function () {


    extension.textContent = ""

    yine.checked = false;
    nine.checked = true;
    totalBill3.innerText = ""
}


//Script for Schoolmeal

//Every Declaration Need goes here

//Major Declaration

let checkedDayMeal = document.getElementById("checkedDayMeal")
let yism = document.getElementById("yism")
let nism = document.getElementById("nism")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let mon = document.getElementById("mon")
let tue = document.getElementById("tue")
let wed = document.getElementById("wed")
let thur = document.getElementById("thur")
let fri = document.getElementById("fri")
let schoolMeal = document.getElementById("schoolMeal")
let nodd = document.getElementById("nodd")
let dwsf = document.getElementById("dwsf")

//FIVE DAYS SUBSCRIPTION
//This is the function that enables that when I click yes in "Interested in School Meal and also click five as my number of days, the school meal price become 100000. However, if I do not click yes or no in the interested in school meal, and went ahead to click five on the number of days, it will alert yo have not shown interest in school meal."

let yismClicked = false;
let fiveClicked = false;

function checkClicks1() {
    if (yismClicked && fiveClicked) {
        schoolMeal.innerText = 100000;
        yismClicked = false;
        fiveClicked = false;
    }

    else if (fiveClicked && !yismClicked) {
        alert("You have not shown your interest in school meal")
        fiveClicked = false;
    }
}

yism.onclick = function () {
    yismClicked = true;

    checkClicks1();

    alert("Kindly select the number of days yo preferred for your wards?")



}

//This is another function that checks the five boxes if the subscriber chooses five days.

function checkFiveButtons() {
    let fiveButtons = document.querySelectorAll(".fiveButtons")
    fiveButtons.forEach(fb => {
        fb.checked = true;
    });
}

five.onclick = function () {
    nodd.innerText = "Five days a week subscription"
    fiveClicked = true;
    checkClicks1();
    alert("All days will be automatically checked below")
    checkFiveButtons();
    dwsf.innerText = "Mondays, Tuesdays, Wednesday, Thursdays and Fridays"


};

//FOUR DAY SUBSCRIPTION

let fourClicked = false;
let threeClicked = false;
let twoClicked = false;
let oneClicked = false;

function checkClicks2() {
    if (yismClicked && fourClicked) {
        schoolMeal.innerText = 80000;
        yismClicked = false;
        fourClicked = false;
    }

    else if (fourClicked && !yismClicked) {
        alert("You have not shown your interest in school meal")
        fourClicked = false;
    }
}

function checkClicks3() {
    if (yismClicked && threeClicked) {
        schoolMeal.innerText = 60000;
        yismClicked = false;
        threeClicked = false;
    }

    else if (threeClicked && !yismClicked) {
        alert("You have not shown your interest in school meal")
        threeClicked = false;
    }
}

function checkClicks4() {
    if (yismClicked && twoClicked) {
        schoolMeal.innerText = 40000;
        yismClicked = false;
        twoClicked = false;
    }

    else if (twoClicked && !yismClicked) {
        alert("You have not shown your interest in school meal")
        twoClicked = false;
    }
}

function checkClicks5() {
    if (yismClicked && oneClicked) {
        schoolMeal.innerText = 20000;
        yismClicked = false;
        oneClicked = false;
    }

    else if (oneClicked && !yismClicked) {
        alert("You have not shown your interest in school meal")
        oneClicked = false;
    }
}



// function checkSomeButtons(){
//     let some = document.querySelectorAll(".some")
//     for (let i=0; i < 4; i++){
//         some[i].checked = true
//     }
// }

four.onclick = function () {
    nodd.innerText = "Four days a week subscription"
    fourClicked = true;
    checkClicks2();
    alert("You have subscribed for just four days. Check the boxes below to choose your preffered days, click OK to continue")

};

three.onclick = function () {
    nodd.innerText = "Three days a week subscription"
    threeClicked = true;
    checkClicks3();
    alert("You have subscribed for just three days. Check the boxes below to choose your preffered days, click OK to continue")

};

two.onclick = function () {
    nodd.innerText = "Twice a week subscription"
    twoClicked = true;
    checkClicks4();
    alert("You have subscribed for just two days. Check the boxes below to choose your preffered days, click OK to continue")

};

one.onclick = function () {
    nodd.innerText = "One day a week subscription"
    oneClicked = true;
    checkClicks5();
    alert("You have subscribed for just Once a day. Check the boxes below to choose your preffered days, click OK to continue")

};


let checkboxes = document.querySelectorAll(".some")

let maxChecked = 4;
let checkedValues = [];


checkboxes.forEach(somecheck => {
    somecheck.addEventListener("change", function () {
        if (somecheck.checked) {
            if (checkedValues.length < maxChecked) {
                checkedValues.push(somecheck.value);
            } else {
                somecheck.checked = false;
            }
        } else {
            let index = checkedValues.indexOf(somecheck.value);
            if (index !== -1) {
                checkedValues.splice(index, 1);
            }
        }
        dwsf.innerText = checkedValues.join(", ");
    });
});

// Script for interested in extension?

let afterSchool = document.getElementById("afterSchool")
let yias = document.getElementById("yias")
let nias = document.getElementById("nias")

yias.onclick = function () {

    afterSchool.textContent = 25000;

    yias.checked = true;
    nias.checked = false;
}


nias.onclick = function () {

    afterSchool.textContent = ""

    yias.checked = false;
    nias.checked = true;
    totalBill3 = 0;
}

//TOTAL FOR BILL 3

let totalBill3btn = document.getElementById("totalBill3btn");
let totalBill3 = document.getElementById("totalBill3")

totalBill3btn.onclick = function () {
    let res2 = parseInt(extension.innerText) + parseInt(schoolMeal.innerText) + parseInt(afterSchool.innerText);
    totalBill3.innerText = res2;

    if (extension.innerHTML === "" && schoolMeal.innerHTML === "" && afterSchool.innerHTML === "") {
        extension.innerHTML = 0;
        schoolMeal.innerHTML = 0;
        afterSchool.innerHTML = 0;
        let res2 = parseInt(extension.innerText) + parseInt(schoolMeal.innerText) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        extension.innerText = "Not Subscribed"
        schoolMeal.innerText = "Not subsribed"
        afterSchool.innerText = "Not subscribed"
    }

    else if (extension.innerHTML === "" && !(schoolMeal.innerHTML === "") && !(afterSchool.innerHTML === "")) {
        extension.innerHTML = 0;
        let res2 = parseInt(extension.innerText) + parseInt(schoolMeal.innerText) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        extension.innerText = "Not Subscribed"
    }

    else if (schoolMeal.innerHTML === "" && !(extension.innerHTML === "") && !(afterSchool.innerHTML === "")) {
        schoolMeal.innerHTML = 0;
        let res2 = parseInt(extension.innerText) + parseInt(schoolMeal.innerText) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        schoolMeal.innerText = "Not Subscribed"
    }

    else if (afterSchool.innerHTML === "" && !(schoolMeal.innerHTML === "") && !(extension.innerHTML === "")) {
        afterSchool.innerHTML = 0;
        let res2 = parseInt(extension.innerText) + parseInt(schoolMeal.innerText) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        afterSchool.innerText = "Not Subscribed"
    }

    else if (afterSchool.innerHTML === "" && schoolMeal.innerHTML === "" && !(extension.innerHTML === "")) {
        afterSchool.innerText = "0"
        schoolMeal.innerText = "0";
        let res2 = parseInt(extension.innerHTML) + parseInt(schoolMeal.innerHTML) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        afterSchool.innerText = "Not Subscribed";
        schoolMeal.innerText = "Not Subscribed"

    }

    else if (extension.innerHTML === "" && schoolMeal.innerHTML === "" && !(afterSchool.innerHTML === "")) {
        extension.innerText = "0"
        schoolMeal.innerText = "0";
        let res2 = parseInt(extension.innerHTML) + parseInt(schoolMeal.innerHTML) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        extension.innerText = "Not Subscribed";
        schoolMeal.innerText = "Not Subscribed"

    }

    else if (afterSchool.innerHTML === "" && extension.innerHTML === "" && !(schoolMeal.innerHTML === "")) {
        afterSchool.innerText = "0"
        extension.innerText = "0";
        let res2 = parseInt(extension.innerHTML) + parseInt(schoolMeal.innerHTML) + parseInt(afterSchool.innerText);
        totalBill3.innerText = res2;
        afterSchool.innerText = "Not Subscribed";
        extension.innerText = "Not Subscribed"

    }
}

let overallTotalBtn = document.getElementById("overallTotalBtn");

let overallTotal = document.getElementById("overallTotal");

overallTotalBtn.onclick = function () {
    let tution = 95000;
    let totaloverall = tution + parseInt(totalbill2.innerHTML) + parseInt(totalBill3.innerHTML) + parseInt(amountPayableSchBus1.innerHTML);

    overallTotal.textContent = "N" + totaloverall;

    if (totalbill2.innerHTML==="" || totalBill3.innerHTML==="" || amountPayableSchBus1.innerHTML===""){
        alert("Click on the total button of each bill to view total")
        overallTotal.textContent = "";
    }
}

//Generate PDf

let generate_pdf = document.getElementById("generate-pdf")

generate_pdf.onclick = function(){

window.jsPDF = window.jspdf.jsPDF;
var doc = new jsPDF();

var elementHTML = document.querySelector("body")

doc.html(elementHTML, {
    callback: function(doc){
        doc.save("marzwellreceipt.pdf")
    },
    margin: [10, 10, 10, 10],
    autoPaging: 'text',
    x: 0,
    y: 0,


    width: 190,
    windowWidth: 675
});

}















