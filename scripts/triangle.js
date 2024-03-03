
function calculateTriangle(){
    // console.log(`connected`)
   const triangleBase =  document.getElementById(`triangleBase`);
   const triangleBaseValue = parseFloat(triangleBase.value);
   console.log(triangleBaseValue)
   const triangleHeight = document.getElementById(`triangleHeight`);
   const triangleHeightValue = parseFloat(triangleHeight.value);
   console.log(triangleHeightValue)

   const area =  0.5 * triangleBaseValue * triangleHeightValue;
   console.log(area)
   const triangleArea = document.getElementById(`triangleArea`);
   triangleArea.innerHTML = area;
}