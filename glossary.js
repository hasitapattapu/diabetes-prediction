const glossaryTerms = [
    // Prediction dataset terms
    {
      term: "Polyuria",
      definition: "Excessive or frequent urination, often an early symptom of diabetes."
    },
    {
      term: "Polydipsia",
      definition: "Excessive thirst, commonly experienced by individuals with high blood sugar levels."
    },
    {
      term: "Sudden weight loss",
      definition: "Unexplained rapid weight loss, a potential indicator of diabetes onset."
    },
    {
      term: "Weakness",
      definition: "General lack of strength or energy, often caused by high or low blood sugar."
    },
    {
      term: "Polyphagia",
      definition: "Increased hunger and food consumption, despite normal or high calorie intake."
    },
    {
      term: "Genital thrush",
      definition: "A fungal infection that can occur due to high glucose levels in urine."
    },
    {
      term: "Visual blurring",
      definition: "Blurry vision caused by fluctuating blood sugar levels affecting eye lenses."
    },
    {
      term: "Itching",
      definition: "Irritated or dry skin, often resulting from poor circulation or infection."
    },
    {
      term: "Irritability",
      definition: "Mood swings or agitation possibly linked to unstable blood sugar."
    },
    {
      term: "Delayed healing",
      definition: "Slow wound healing due to impaired blood circulation and immune response."
    },
    {
      term: "Partial paresis",
      definition: "Mild muscle weakness, sometimes caused by nerve damage from diabetes."
    },
    {
      term: "Muscle stiffness",
      definition: "Reduced muscle flexibility, can result from nerve or blood flow issues."
    },
    {
      term: "Alopecia",
      definition: "Hair loss, which may be associated with autoimmune responses or diabetes complications."
    },
    {
      term: "Obesity",
      definition: "A condition of excessive body fat, a major risk factor for Type 2 diabetes."
    },
  
    // Pima dataset terms
    {
      term: "Glucose",
      definition: "The concentration of sugar in the blood; high levels indicate potential diabetes."
    },
    {
      term: "Blood Pressure",
      definition: "The pressure of circulating blood; high blood pressure is a risk factor for diabetes complications."
    },
    {
      term: "Skin Thickness",
      definition: "Refers to the triceps skinfold thickness; used as a measure of body fat."
    },
    {
      term: "Insulin",
      definition: "A hormone that regulates blood sugar; low production or resistance leads to diabetes."
    },
    {
      term: "BMI",
      definition: "Body Mass Index - a measure of body fat based on height and weight."
    },
    {
      term: "Diabetes Pedigree Function",
      definition: "A score indicating the likelihood of diabetes based on family history."
    },
    {
      term: "Age",
      definition: "Diabetes risk increases with age, especially after 45 years."
    },
  
    // Extra advanced terms
    {
      term: "HbA1c",
      definition: "Hemoglobin A1c is a long-term indicator of average blood glucose over 2–3 months."
    },
    {
      term: "Fasting Blood Sugar",
      definition: "Blood glucose level measured after an overnight fast; used to diagnose diabetes."
    },
    {
      term: "Postprandial Blood Sugar",
      definition: "Blood glucose measured 2 hours after eating; indicates glucose tolerance."
    },
    {
      term: "Neuropathy",
      definition: "Nerve damage often caused by prolonged high blood sugar, leading to pain or numbness."
    },
    {
      term: "Retinopathy",
      definition: "Damage to the retina caused by diabetes, potentially leading to blindness."
    },
    {
      term: "Ketones",
      definition: "Produced when the body burns fat instead of glucose; high levels can signal diabetic ketoacidosis."
    },
    {
      term: "Type 1 Diabetes",
      definition: "Autoimmune condition where the pancreas produces little or no insulin."
    },
    {
      term: "Type 2 Diabetes",
      definition: "Chronic condition affecting how the body processes blood sugar; often linked to lifestyle."
    },
    {
      term: "Gestational Diabetes",
      definition: "A type of diabetes that develops during pregnancy and usually disappears after delivery."
    }
  ];
  
  // Inject glossary into the HTML
  const glossaryList = document.getElementById("glossaryList");
  
  function displayGlossary(filteredTerms) {
    glossaryList.innerHTML = "";
  
    filteredTerms.forEach(entry => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${entry.term}</strong>: ${entry.definition}`;
      glossaryList.appendChild(li);
    });
  }
  
  // Initial load
  displayGlossary(glossaryTerms);
  
  // Search filter logic
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = glossaryTerms.filter(entry =>
      entry.term.toLowerCase().includes(query) ||
      entry.definition.toLowerCase().includes(query)
    );
    displayGlossary(filtered);
  });
  