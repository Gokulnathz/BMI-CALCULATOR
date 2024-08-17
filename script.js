function calculateBMI() {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    console.log(weight, height);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height/100)**2;
        document.getElementById('result').innerHTML = `<h3> Your BMI is </h3>`;
        document.getElementById('bmi').innerHTML = `<h3>${bmi.toFixed(2)}</h3>`;
        console.log(bmi)
        setNeedlePosition(bmi)
    } else {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
        setNeedlePosition(0);
    }
   
}
function reset()
{
    document.getElementById('weight').value='';
    document.getElementById('height').value='';
}
function setNeedlePosition(bmi) {
    event.preventDefault();
    console.log("setNeedlePosition")
    // const angle = parseFloat(document.getElementById('angleInput').value);
    const line = document.querySelector('.needle');

    if (!isNaN(bmi)) {
        let angle;
    if (bmi < 18.5) {
        angle = 0;
    } else if (bmi < 24.9) {
        angle = 45;
    } else if (bmi < 29.9) {
        angle = 90;
    } else if(bmi <34.9){
        angle = 120;
    } else if(bmi >35)
    {
        angle=180;
    }
        console.log("angle",angle)
       
    
    // Apply rotation to the line
    line.style.transform = `rotate(${angle}deg)`;
       
    }
}