const btns = document.querySelectorAll(".calculator__buttons-number");
const display = document.querySelector(".display");
const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");


btns.forEach(btn => {

    btn.addEventListener("click", () => {

        let number = btn.getAttribute('data-num');
        display.value += number;

    })
});


equalsBtn.addEventListener("click", () => {

    if (display.value === "") {

        display.value = `Please enter a value`

    } else {

        let result = eval(display.value)
        display.value = result;

    }
});


clearBtn.addEventListener("click", () => {

    display.value = "";

});
