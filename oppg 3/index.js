
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let buttonRandom = document.createElement("button");
let buttonCalculate = document.createElement("button");
let result1 = document.createElement("p");
let result2 = document.createElement("p");
let result3 = document.createElement("p");
let result4 = document.createElement("p");
let result5 = document.createElement("p");

input1.setAttribute("type", "number");
input2.setAttribute("type", "number");

buttonRandom.textContent = "Random";
buttonCalculate.textContent = "Beregn";

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(buttonRandom);
document.body.appendChild(buttonCalculate);
document.body.appendChild(result1);
document.body.appendChild(result2);
document.body.appendChild(result3);
document.body.appendChild(result4);
document.body.appendChild(result5);

buttonRandom.addEventListener("click", function() {
    let random1 = Math.floor(Math.random() * 100);
    let random2 = Math.floor(Math.random() * 100);

    input1.value = random1;
    input2.value = random2;

    result1.textContent = "Random tall 1: " + random1;
    result2.textContent = "Random tall 2: " + random2;
});

buttonCalculate.addEventListener("click", function() {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    result1.textContent = "Tall 1: " + num1;
    result2.textContent = "Tall 2: " + num2;
    result3.textContent = "Sum: " + sum;
    result4.textContent = "Differanse: " + difference;
    result5.textContent = "Produkt: " + product;
    result6.textContent = "Kvotient: " + quotient;
});
