function randomNum() {
    return Math.floor(Math.random() * 49) + 1
}

let getNumbers = document.querySelector("#get-numbers")
let numbers = document.querySelector("#numbers")

getNumbers.addEventListener("click", () => {
    let numList = []
    
    while (numList.length < 6) {
        let num = randomNum();
        if (numList.includes(num)) continue
        else numList.push(num)
    }

    numList.sort((a, b) => a - b)
    numbers.innerText = numList;
})