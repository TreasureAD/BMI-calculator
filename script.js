function calculateBMI() {
    let age = parseInt(document.getElementById('age').value);
    let feet = parseInt(document.getElementById('height-feet').value);
    let inches = parseInt(document.getElementById('height-inches').value);
    let weight = parseInt(document.getElementById('weight').value);
    let totalInches = feet * 12 + inches;
    let bmi = (weight / (totalInches * totalInches)) * 703;
    document.getElementById('result').innerHTML = 'Your BMI is ' + bmi.toFixed(2);

    const statusBar = document.getElementById('bmi-status-bar');
    statusBar.className = 'bmi-status-bar'; // Reset classes
    if (bmi < 18.5) {
        statusBar.classList.add('low');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        statusBar.classList.add('normal');
    } else {
        statusBar.classList.add('high');
    }
}
