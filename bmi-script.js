document.getElementById("bmi-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked');
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("bmi-result");
  
    if (isNaN(age) || !gender || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.innerHTML = `<p style="color:red; font-weight:bold;">Please enter valid details in all fields.</p>`;
      resultDiv.classList.remove("highlight");
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(1);
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    resultDiv.innerHTML = `
      <h3>Your BMI: ${bmiRounded}</h3>
      <p>Category: <strong>${category}</strong></p>
    `;
  
    resultDiv.classList.remove("highlight");
    void resultDiv.offsetWidth; // Restart animation
    resultDiv.classList.add("highlight");
  });
  