
let inputName = document.getElementById('EInput');
let start = document.getElementById("start");
let forth = document.getElementById('forth')
let five = document.getElementById('five')
let BtnPin = document.getElementById('BtnPin');


BtnPin.addEventListener('click' , ()=>{
    let pin = "1234";
    let task = inputName.value;
    if(task === pin){
        alert("Password is Correct");
        second.style.display = "block";
        start.style.display = "none"; 
    }
    else{
        alert("Password is Not Correct");
    }   
    inputName.value = "";
});

BtnCashWithdraw.addEventListener('click' , ()=>{
    document.getElementById('third').style.display = 'block';
    document.getElementById('second').style.display = 'none';
});

let balanceAmount = 100000;
let BtnBalanceAmt = document.getElementById('BtnBalanceAmt');


BtnBalanceAmt.addEventListener('click', () => {
    if(balanceAmount){
        document.getElementById('balanceDisplay').innerHTML = `Remaining Balance : ${balanceAmount}`;
        document.getElementById('forth').style.display = 'block';
        document.getElementById('second').style.display = 'none';
    }
});

let btnStr = document.getElementById('btnStr');
btnStr.addEventListener('click' , ()=>{
    if(btnStr){
        document.getElementById('start').style.display = 'block';
        document.getElementById('forth').style.display = 'none';
    }
});

let btnK5 = document.getElementById('btnK5');
btnK5.addEventListener('click', () => {
    let withdrawal = 5000;

    if (withdrawal) {
        balanceAmount -= withdrawal;
        document.getElementById("k5Balance").innerHTML = `Your Transaction Is Successful : ${withdrawal}`;
        document.getElementById('fiveK').style.display = 'block';
        document.getElementById('third').style.display = 'none';
    }
});
let btnStr1 = document.getElementById('btnStr1');
btnStr1.addEventListener('click' , ()=>{
    if(btnStr1){
        document.getElementById('start').style.display = 'block';
        document.getElementById('fiveK').style.display = 'none';
    }
});

let btnK10 = document.getElementById('btnK10');
btnK10.addEventListener('click', () => {
    let withdrawal = 10000;

    if (withdrawal) {
        balanceAmount -= withdrawal;
        document.getElementById("k10Balance").innerHTML = `Your Transaction Is Successful : ${withdrawal}`;
        document.getElementById('tenK').style.display = 'block';
        document.getElementById('third').style.display = 'none';
    }
});
let btnStr2 = document.getElementById('btnStr2');
btnStr2.addEventListener('click' , ()=>{
    if(btnStr2){
        document.getElementById('start').style.display = 'block';
        document.getElementById('tenK').style.display = 'none';
    }
});

let btnK50 = document.getElementById('btnK50');
btnK50.addEventListener('click', () => {
    let withdrawal = 50000;

    if (withdrawal) {
        balanceAmount -= withdrawal;
        document.getElementById("k50Balance").innerHTML = `Your Transaction Is Successful : ${withdrawal}`;
        document.getElementById('fiftyK').style.display = 'block';
        document.getElementById('third').style.display = 'none';
    }
});
let btnStr3 = document.getElementById('btnStr3');
btnStr3.addEventListener('click' , ()=>{
    if(btnStr3){
        document.getElementById('start').style.display = 'block';
        document.getElementById('fiftyK').style.display = 'none';
    }
});


let btnOth = document.getElementById('btnOth');
btnOth.addEventListener('click' , ()=>{
    document.getElementById('fifth').style.display = 'block';
    document.getElementById('third').style.display = 'none';
});


let AmtInput = document.getElementById('AmtInput')
AmountBtn.addEventListener('click' , ()=>{
    let Amt = AmtInput.value;
    if(Amt){
    balanceAmount -= Amt;
    document.getElementById("otherBalance").innerHTML = `Your Transaction Is Successful : ${Amt}`;
    document.getElementById('otherAmt').style.display = 'block';
    document.getElementById('fifth').style.display = 'none';
}
})

let btnStr4 = document.getElementById('btnStr4');
btnStr4.addEventListener('click' , ()=>{
    if(btnStr4){
        document.getElementById('start').style.display = 'block';
        document.getElementById('otherAmt').style.display = 'none';
    }
});
