const inputBox = document.querySelector("#inputBox");
const btn = document.querySelector("#btn");
const checkPara = document.querySelector("#check");

btn.addEventListener("click", () => {
    const input = inputBox.value;
    const norm = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const rev = norm.split("").reverse().join("");

    if (input) {

        if (norm === rev) {
            checkPara.innerText = `${input} is a palindrome`;
            checkPara.style.color = "green";
            checkPara.style.display = "flex";
        }
        else {
            checkPara.innerText = `${input} is not a palindrome`;
            checkPara.style.color = "red";
            checkPara.style.display = "flex";
        }
    }
    else {
        checkPara.innerText = "Please enter some text";
        checkPara.style.color = "orange";
        checkPara.style.display = "flex";
    }
});


