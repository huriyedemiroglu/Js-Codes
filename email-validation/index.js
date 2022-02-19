let emailInput = document.querySelector("#email")
let check = document.querySelector("#check")
let result = document.querySelector("#result")
let chars = ["!", "#", "$", "%", "&", "'", "*", "+", "/", "=", "?", "^", " "]

check.addEventListener("click", () => {
    result.innerHTML = checkEmail(emailInput.value)
})

function checkEmail(text) {
    if (!text.includes("@")) return false;

    text = text.split("@")
    let [userName, host] = text;
    
    for (let char of userName) {
        if (chars.includes(char)) {
            return false
        }
    }
    if (!userName) return false;
    if (!host || !host.includes(".")) return false

    let [domain, extension] = host.split(".");
    if (!domain || !extension) return false;

    if (!domain.match("[a-z]")) return false;
    if (!extension.match("[a-z]") || !(extension.length <= 3 && extension.length > 0)) return false;
    
    return true
}
