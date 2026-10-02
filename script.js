    // let value = document.getElementById("value")
    // let decrease = document.querySelector(".group-button .btn-decrease")
    // let reset = document.querySelector(".group-button .btn-reset")
    // let Increase = document.querySelector(".group-button .btn-decrease")

    // let count = 0;
    // function handleDecrease(){
    //     count -= 1;
    //     value.textContent = count
    //     // if(count < 0){
    //     //     value.classList.add("negative")
    //     // }
    // }

    // function handleReset(){
    //     count = 0
    //     value.textContent = count
    //     // if(count == 0){
    //     //     value.classList.add("zero")
    //     // }
    // }

    // function handleIncrease(){
    //     count += 1
    //     console.log(value);
        
    // }
    // decrease.addEventListener("click",handleDecrease)
    // reset.addEventListener("click", handleReset)
    // Increase.addEventListener("click",  handleIncrease)


const value = document.getElementById("value")
const decrease = document.querySelector(".btn-decrease")
const reset = document.querySelector(".btn-reset")
const increase = document.querySelector(".btn-increase")

let count = 0;

function handleDecrease(){
    count -= 1
    value.textContent = count
    if(count < 0 && !value.classList.contains("negative"))
        value.classList.add("negative")
}
decrease.addEventListener("click", handleDecrease)

function handleReset(){
    count = 0
    value.textContent = count
    if(count == 0 && !value.classList.contains("zero")){
        value.classList.add("zero")
    }
}
reset.addEventListener("click", handleReset)

function handleIncrease(){
    count += 1
    value.textContent = count
    if(count > 0 && !value.classList.contains("positive")){
        value.classList.add("positive")
    }
}
increase.addEventListener("click", handleIncrease)