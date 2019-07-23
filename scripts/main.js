outputbox1 = document.querySelector("#box1")
outputbox2 = document.querySelector("#box2")

let textBox = document.getElementById("message")

textBox.addEventListener("keyup", function (event) {
    outputbox1.textContent = event.target.value;
    outputbox2.textContent = event.target.value;
})


