const number = document.querySelectorAll(".number");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

let count = '';

console.log(number);

document.addEventListener("onclick", () => {
    

    for( let i = 0; i < number.length; i++ ) {
        number[i] = i*10;
    }
    const value = number.value;

    result.innerHtml = value;    
});