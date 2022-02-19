let down = document.querySelector("#down")
let up = document.querySelector("#up")
let number = document.querySelector("#number")
let search = document.querySelector("#search")
let result = document.querySelector("#result")

search.addEventListener("click", () => {
    let numList = [];
    let count = 0;

    for (let i = +down.value; i <= +up.value; i++){
        numList.push(i);
    }
    numList = numList + "";
    
    for (num of numList) {
        if (num.includes(number.value)) count++;
    }

    result.innerHTML = count
})