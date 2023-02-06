console.log("Cześć")

let button = document.querySelector(".button");

button.addEventListener("click", () => {
    if (button.innerText === "Lubię to👍") {
        button.innerText = "Nie Lubię😢";
    }
    else if (button.innerText === "Nie Lubię😢") {
        button.innerText = "Lubię to👍";
    }
})

