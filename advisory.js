document.addEventListener("DOMContentLoaded", function () {
  const advisoryContent = document.getElementById("advisory-content");

  // ✅ Retrieve data from sessionStorage, not localStorage
  const advisoryData = JSON.parse(sessionStorage.getItem("advisoryData"));

  if (!advisoryData || !advisoryData.prediction) {
    advisoryContent.innerHTML = `
      <div class="advisory-message">
        ⚠️ Please visit the <a href="prediction.html" class="advisory-link">Prediction Page</a> first to get personalized health advice.
      </div>
    `;
    return;
  }

  // Start generating tips
  let tips = [];

  if (advisoryData.prediction === "Positive") {
    tips.push("🥗 Maintain a balanced diet with low sugar and refined carbs.");
    tips.push("🚶 Engage in daily physical activity, such as walking or yoga.");
    tips.push("💧 Stay hydrated throughout the day.");
    tips.push("🩺 Schedule regular checkups and monitor blood sugar levels.");
  } else {
    tips.push("👍 Great job! Keep up your healthy habits.");
    tips.push("🍎 Continue eating fruits, vegetables, and whole grains.");
    tips.push("🏃‍♀️ Stay physically active to maintain your low risk.");
  }

  // Add condition-based tips
  if (advisoryData.obesity === "Yes") {
    tips.push("⚖️ Work on gradual and healthy weight loss through diet and activity.");
  }

  if (advisoryData.sudden_weight_loss === "Yes") {
    tips.push("🔍 Sudden weight loss could be a concern. Please consult a healthcare provider.");
  }

  if (advisoryData.polyuria === "Yes" || advisoryData.polydipsia === "Yes") {
    tips.push("🚰 Frequent urination or thirst might be early signs of high glucose—monitor closely.");
  }

  if (advisoryData.visual_blurring === "Yes") {
    tips.push("👁️ Blurred vision? Ensure you check your eye health regularly.");
  }

  if (advisoryData.genital_thrush === "Yes") {
    tips.push("🧼 Practice good hygiene to manage symptoms like thrush.");
  }

  if (advisoryData.partial_paresis === "Yes" || advisoryData.muscle_stiffness === "Yes") {
    tips.push("🧘‍♀️ Gentle stretching or physiotherapy may help with muscle stiffness or weakness.");
  }

  // Show final tips
  const tipList = tips.map(tip => `<li>${tip}</li>`).join("");
  advisoryContent.innerHTML = `
    <div class="advisory-message">
      <h2>📋 Personalized Health Tips</h2>
      <ul style="text-align: left; line-height: 1.8;">${tipList}</ul>
      <p style="margin-top: 20px;">🔁 <a href="prediction.html" class="advisory-link">Go back to Prediction Page</a></p>
    </div>
  `;
});
