

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    let BMI = calculateResult(height, weight);

    console.log(BMI);
    document.getElementById('res').textContent = BMI;

    if(BMI<18)
    {
        document.getElementById('classify').textContent = "UnderWeight"
    }
    else if(BMI<25 && BMI > 18 ){
        document.getElementById('classify').textContent = "Normal"
    }
    else{
         document.getElementById('classify').textContent = "Obese"
    }
    

    rotateArrow(BMI);
});

function calculateResult(height, weight) {
   
    let height_m = height / 100;
    let bmi = weight / (height_m * height_m);
    return bmi;
}

function rotateArrow(BMI) {
    let angle = 0; // Default to 0 degrees

    if (BMI < 18) {
        angle = (BMI - 15) * (45 / 3); 
    } else if (BMI >= 18 && BMI < 25) {
        angle = 45 + ((BMI - 18) * (45 / 7)); 
    } else if (BMI >= 25 && BMI < 30) {
        angle = 90 + ((BMI - 25) * (45 / 5)); 
    } else if (BMI >= 30) {
        angle = 135 + ((BMI - 30) * (45 / 10)); 
        if (angle > 180) angle = 180; 
    }

    // Apply the rotation to the arrow
    let arrow = document.getElementById('bmiArrow');
    arrow.style.transform = `rotate(${angle}deg)`;
}