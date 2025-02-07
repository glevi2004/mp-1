function addition() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value;
  input1 = Number(input1);
  input2 = Number(input2);

  result = input1 + input2;

  document.getElementById("calc-output").innerHTML = String(result);
}

function subtraction() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value;
  input1 = Number(input1);
  input2 = Number(input2);

  let result = input1 - input2;

  document.getElementById("calc-output").innerHTML = String(result);
}

function division() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value;
  input1 = Number(input1);
  input2 = Number(input2);

  let result = input1 / input2;

  document.getElementById("calc-output").innerHTML = String(result);
}

function power() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value;
  input1 = Number(input1);
  input2 = Number(input2);

  let result = 1;
  for (let i = 0; i < input2; i++) {
    result = result * input1;
  }

  document.getElementById("calc-output").innerHTML = String(result);
}

function clearCalculator() {
  document.getElementById("input-1").value = "";
  document.getElementById("input-2").value = "";
  document.getElementById("calc-output").innerHTML = "";
}
