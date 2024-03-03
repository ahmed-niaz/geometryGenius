function calculateRectangle(){
    const width = document.getElementById(`width`);
    const widthValue = parseFloat(width.value)
    const length = document.getElementById(`length`);
    const lengthValue = parseFloat(length.value)

    const area = widthValue * lengthValue;
    const rectangleArea = document.getElementById(`rectangleArea`);
    rectangleArea.innerHTML = area;
}