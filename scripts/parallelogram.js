/*
function calculateParallelogram() {
  const baseValue = inputValue()
  console.log(baseValue)
}
function inputValue() {
    const parallelogramBase = document.getElementById(`parallelogramBase`);
    const parallelogramBaseValue = parseFloat(parallelogramBase.value);
    return parallelogramBaseValue;
}
*/

function inputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const input = parseFloat(inputField.value);
  return input;
}

function calculateParallelogram() {
  const baseInput = inputValue("parallelogramBase");
  // console.log(baseInput)
  const heightInput = inputValue("parallelogramHeight");
  // console.log(heightInput)

  const area = baseInput * heightInput;
  // console.log(area)

  const parallelogramArea = document.getElementById(`parallelogramArea`);
  parallelogramArea.innerHTML = area;
}
