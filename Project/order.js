const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const countField = document.querySelector("#quantity");

minusButton.addEventListener("click", () => {
    if (countField.value > 1)
        countField.value--;
});

plusButton.addEventListener("click", () => {
    if (countField.value < 10)
        countField.value++;
});

countField.addEventListener("change", () => {
    if (countField.value > 10)
        countField.value = 10;
    else if (countField.value < 1)
        countField.value = 1;
});