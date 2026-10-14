
let result = document.getElementById("result");

function displayNumber(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (!/^[0-9+\-*/%.()\s]+$/.test(result.value)) {
            throw new Error("Invalid");
        }

        result.value = eval(result.value);

        if (!Number.isFinite(Number(result.value))) {
            result.value = "Error";
        }
    } catch {
        result.value = "Error";
    }
}
