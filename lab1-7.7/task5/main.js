// *************** Task 5 ***************
// Fill an array of 3 elements from the user, and apply each of 
// the following mathematicaloperations on it (+, *, /).
function calculate() {
    const n1 = document.getElementById("num1").value.trim();
    const n2 = document.getElementById("num2").value.trim();
    const n3 = document.getElementById("num3").value.trim();

    const resultBox = document.getElementById("result");

    if (n1 === "" || isNaN(n1) || n2 === "" || isNaN(n2) || n3 === "" || isNaN(n3)) {
        resultBox.innerHTML = `<span style="color:red;">Please enter valid numbers in all fields.</span>`;
        return;
    }
    else if (n2 === "0" || n3 === "0") {
        resultBox.innerHTML = `<span style="color:red;">Division by zero is not allowed.</span>`;
        return;
    }

    const a = Number(n1);
    const b = Number(n2);
    const c = Number(n3);

    const sum = a + b + c;
    const product = a * b * c;
    const division = a / b / c;

    resultBox.innerHTML = `
    <div class="result-line"><span class="label">sum of the 3 values</span> ${a}+${b}+${c} = ${sum}</div>
    <div class="result-line"><span class="label">multiplication of the 3 values</span> ${a}*${b}*${c} = ${product}</div>
    <div class="result-line"><span class="label">division of the 3 values</span> ${a}/${b}/${c} = ${division}</div>
  `;
}
