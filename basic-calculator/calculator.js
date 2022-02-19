let firstNum = document.querySelector("#first-num")
let secondNum = document.querySelector("#second-num")
let operator = document.querySelector("#operator")
let calculateBtn = document.querySelector("#calculate")
let label = document.querySelector("#result")

calculateBtn.addEventListener("click", () => {
    let result;

    if (operator.value == "+") result = +firstNum.value + +secondNum.value
    if (operator.value == "-") result = +firstNum.value - +secondNum.value
    if (operator.value == "*") result = +firstNum.value * +secondNum.value
    if (operator.value == "/") result = +firstNum.value / +secondNum.value
    else result = "Invalid input!"

    label.innerHTML = result;
})
