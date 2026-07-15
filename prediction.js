document.getElementById("prediction-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  // Extract all input values
  const age = parseInt(form.age.value);
  const gender = form.gender.value;
  const polyuria = form.polyuria.value;
  const polydipsia = form.polydipsia.value;
  const suddenWeightLoss = form.sudden_weight_loss.value;
  const weakness = form.weakness.value;
  const polyphagia = form.polyphagia.value;
  const genitalThrush = form.genital_thrush.value;
  const visualBlurring = form.visual_blurring.value;
  const itching = form.itching.value;
  const irritability = form.irritability.value;
  const delayedHealing = form.delayed_healing.value;
  const partialParesis = form.partial_paresis.value;
  const muscleStiffness = form.muscle_stiffness.value;
  const alopecia = form.alopecia.value;
  const obesity = form.obesity.value;

  const resultBox = document.getElementById("result");

  // Prepare the data object to send to backend
  const data = {
    age,
    gender,
    polyuria,
    polydipsia,
    sudden_weight_loss: suddenWeightLoss,
    weakness,
    polyphagia,
    genital_thrush: genitalThrush,
    visual_blurring: visualBlurring,
    itching,
    irritability,
    delayed_healing: delayedHealing,
    partial_paresis: partialParesis,
    muscle_stiffness: muscleStiffness,
    alopecia,
    obesity
  };

  // Send to backend
  fetch('http://127.0.0.1:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      let message = "";
      let imgSrc = "";
      let showTips = false;

      if (result.prediction === "Positive") {
        message = "⚠️ You may have or be at higher risk of Diabetes.";
        imgSrc = "images/caution.gif";
        resultBox.style.background = "#ffe5e5";
        resultBox.style.color = "#c62828";
        showTips = true;
      } else {
        message = "✅ You may have low risk of Diabetes. Keep up the healthy lifestyle!";
        imgSrc = "images/healthy.gif";
        resultBox.style.background = "#e6ffed";
        resultBox.style.color = "#2e7d32";
      }

      let resultHTML = `
        <div id="result-message">${message}</div>
        <img id="result-image" src="${imgSrc}" alt="Result Image" style="max-width: 200px; margin-top: 10px;">
      `;

      // Show tip button for high-risk
      if (showTips) {
        resultHTML += `
          <div style="margin-top: 15px;">
            <button id="getTipsBtn" style="padding: 8px 16px; background-color: #c62828; color: white; border: none; border-radius: 5px; cursor: pointer;">
              Do you need any tips?
            </button>
          </div>
        `;
      }

      resultBox.innerHTML = resultHTML;
      resultBox.style.display = "block";

      // Add click handler to button
      if (showTips) {
        document.getElementById("getTipsBtn").addEventListener("click", function () {
          // Combine form data and prediction into sessionStorage
          const fullData = { ...data, prediction: result.prediction };
          sessionStorage.setItem("advisoryData", JSON.stringify(fullData));

          // Redirect to Advisory page
          window.location.href = "advisory.html";
        });
      }
    })
    .catch(error => {
      console.error("Error:", error);
      resultBox.innerHTML = `<div style="color: red;">Something went wrong. Please try again.</div>`;
      resultBox.style.display = "block";
    });
});

// Scroll to top button functionality
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
