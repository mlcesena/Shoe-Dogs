const convertButton = document.querySelector(".convert-button");
const inputValue = document.querySelector("#input-field");
const selectBox = document.querySelector(".select-box");
const convertLbl = document.querySelector("#convertLbl");
const form = document.querySelector("convert_form");
const err1 = document.querySelector("#err1");

err1.style.display = "none";

convertButton.addEventListener("click", () => {
    let curType = selectBox.options[selectBox.selectedIndex].id;
    let factor = 0.0;
    let symbol = "$";

    if (!isNaN(parseFloat(inputValue.value))) {
        if (inputValue.value < 0 || inputValue.value > 10000) {
            inputValue.style.borderColor = "red";
            err1.style.display = "";
            convertLbl.textContent = "$0.00";
        }
        else {
            inputValue.style.borderColor = "black";
            err1.style.display = "none";

            switch (curType) {
                case "aus":
                    factor = 0.65;
                    break;
                case "uk":
                    factor = 1.16;
                    symbol = "£";
                    break;
                case "eur":
                    factor = 1.01;
                    symbol = "€";
                    break;
                case "mex":
                    factor = 0.051;
                    break;
                case "jpn":
                    factor = 0.0069;
                    symbol = "¥";
                    break;
                case "kor":
                    factor = 0.00073;
                    symbol = "₩";
                    break;
                default:
                    break;
            }
            convertLbl.textContent = `${symbol}${(parseFloat(inputValue.value)/factor).toFixed(2)}`;
        }
    }
});

form.submit(function (e) {
    e.preventDefault();
});