let first=document.querySelector("#first");
let second =document.querySelector("#second");
let operation =document.querySelector("#operation");
let submit =document.querySelector("#submit");
let result =document.querySelector("#result");


submit. addEventListener ( 'mouseenter', ()=>{
  submit.textContent = 'Now move out mouse from here!';
}) ;
submit.addEventListener( 'mouseleave', () => {
 let firstNumber = Number (first.value) ;
 let secondNumber = Number(second.value) ;
if (operation. value === 'add'){
result. textContent = firstNumber + secondNumber;
}
if (operation. value==="substract"){
 result. textContent = firstNumber - secondNumber;
}
if (operation. value === 'divide') {
result. textContent = firstNumber / secondNumber;
}
if (operation. value === 'multiply') {
result.textContent = firstNumber * secondNumber;
}
submit.textContent = 'Move Mouse Here!';
});