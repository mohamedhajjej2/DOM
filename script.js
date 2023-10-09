
// var minusbtn = document.getElementById("minus-btn");
// console.log(Quant);
// minusbtn.addEventListener("click",function(){
//     if (Quant.value > 1){
//         Quant.value--;
//     }
// })


// var minusbtn = document.getElementById("plus-btn");
// minusbtn.addEventListener("click",function(){

//         Quant.value++;
    
// })
//first button
var btnvar1 = document.getElementById("like1");
function togglel1(){
    if (btnvar1.style.color == "red"){
        btnvar1.style.color = "black"
    }
    else{
        btnvar1.style.color = "red"
    }
}
//secend like
var btnvar2 = document.getElementById("like2");
function togglel2(){
    if (btnvar2.style.color == "red"){
        btnvar2.style.color = "black"
    }
    else{
        btnvar2.style.color = "red"
    }
}
// third like
var btnvar3 = document.getElementById("like3");
function togglel3(){
    if (btnvar3.style.color == "red"){
        btnvar3.style.color = "black"
    }
    else{
        btnvar3.style.color = "red"
    }
}

    

var minus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minus.length; i++) {
    let oneminus = minus[i];
    oneminus.addEventListener("click", function () {
        if (oneminus.nextElementSibling.value > 1){
            oneminus.nextElementSibling.value--;
            total();
            total1();
            total2();
            total3();
        }
   
    });
}
var plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
    let oneplus = plus[i];
    oneplus.addEventListener("click", function () {
        oneplus.previousElementSibling.value++;
        total();
        total1();
        total2();
        total3();
    });
}
function deleteItem(e){
    console.log("Button element", e)
    e.parentElement.remove()
    total();
    total1();
    total2();
    total3();
  }
let items = document.getElementsByClassName("Item");
let finalprice = document.getElementById("finalPrice");
function total() {
    let s = 0;
    for (let i = 0;i < items.length; i++){
        let item = items[i];
        s =
        s +
        item.querySelector(".Quant").value *
        item.querySelector(".price").innerText;

    }
    return (finalprice.value = s);
}
 
function total1() {
    let q1 = document.getElementById("q1");
    let p1 = document.getElementById("p1");
    p1.innerText = q1.value * 1379;
}
function total2() {
    let q2 = document.getElementById("q2");
    let p2 = document.getElementById("p2");
    p2.innerText = q2.value * 176.00;
}
function total3() {
    let q3 = document.getElementById("q3");
    let p3 = document.getElementById("p3");
    p3.innerText = q3.value * 249.00;
}
  