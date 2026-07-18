# 🩺 DiaPredict – Diabetes Prediction System

An AI-powered web application that predicts the likelihood of diabetes using a Machine Learning model. The project also provides personalized healthcare guidance, BMI calculation, medical glossary, referral information, and frequently asked questions related to diabetes.

---

## 🌐 Live Demo

**Frontend:** *()*

> **Note:** The prediction feature requires the Flask backend to be running locally. The complete backend source code and trained machine learning model are included in this repository.

---

## ✨ Features

- 🩺 Diabetes Risk Prediction using Machine Learning
- 📊 BMI Calculator
- 💡 Personalized Healthcare Advisory
- 🏥 Referral System
- 📖 Searchable Medical Glossary
- ❓ Frequently Asked Questions (FAQ)
- 📱 Responsive User Interface
- ⚡ Fast Prediction Results

---

## 🧠 Machine Learning

**Algorithm**

- Random Forest Classifier

**Libraries**

- Scikit-learn
- Pandas
- NumPy
- Joblib

**Dataset**

- Early Stage Diabetes Risk Prediction Dataset (Kaggle)

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- Flask
- Flask-CORS

### Machine Learning

- Scikit-learn
- Pandas
- NumPy
- Joblib

### Version Control

- Git
- GitHub

---

## 📂 Project Structure

```text
diabetes-prediction/
│
├── backend/
│   └── prediction_backend/
│       ├── app.py
│       ├── requirements.txt
│       ├── diabetes_model.pkl
│       ├── label_encoders.pkl
│       ├── diabetes_data.csv
│       └── venv/
│
├── images/
│
├── index.html
├── prediction.html
├── advisory.html
├── bmi.html
├── glossary.html
├── referral.html
├── faq.html
│
├── *.css
├── *.js
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🚀 Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/hasitapattapu/diabetes-prediction.git
```

### 2. Navigate to the Backend

```bash
cd backend/prediction_backend
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Flask Server

```bash
python app.py
```

The backend will start at:

```
http://127.0.0.1:5000
```

### 5. Open the Frontend

Open `index.html` using Live Server (VS Code) or any local web server.

---

## 📈 Future Enhancements

- User Authentication
- Cloud Database Integration
- Mobile Application
- Multi-language Support
- Wearable Device Integration
- AI Health Assistant
- Electronic Health Record (EHR) Integration

---

## 📚 References

- Early Stage Diabetes Risk Prediction Dataset (Kaggle)
- Flask Documentation
- Scikit-learn Documentation
- Pandas Documentation

---

## 👨‍💻 Author

Developed as an academic machine learning project demonstrating the integration of web development and predictive analytics.

---

## 📄 License

This project is licensed under the **MIT License**.