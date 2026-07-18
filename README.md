# 🩺 DiaPredict – Diabetes Prediction System

DiaPredict is an AI-powered web application that predicts the likelihood of diabetes using a Machine Learning model. The project combines predictive analytics with a responsive web interface to help users assess diabetes risk, calculate BMI, access personalized healthcare guidance, explore diabetes-related terminology, and find referral information.

---

# 🌐 Live Demo

**Frontend (GitHub Pages)**

https://hasitapattapu.github.io/diabetes-prediction/

> **Note**
>
> The GitHub Pages deployment showcases the frontend interface of the application.
>
> The Machine Learning prediction feature requires the Flask backend to be running locally. The complete backend source code, trained model, and dataset are included in this repository.

---

## 📌 Project Availability

| Component | Status |
|-----------|--------|
| Frontend | ✅ Deployed on GitHub Pages |
| Backend | ✅ Included in Repository |
| Machine Learning Model | ✅ Included in Repository |
| Online Prediction | ❌ Not Available |
| Local Prediction | ✅ Fully Functional |

---

# ✨ Features

- 🩺 Diabetes Risk Prediction using Machine Learning
- 📊 BMI Calculator
- 💡 Personalized Healthcare Advisory
- 🏥 Healthcare Referral Information
- 📖 Medical Glossary
- ❓ Frequently Asked Questions (FAQ)
- 📱 Responsive Multi-page User Interface
- ⚡ Fast Prediction Results

---

# 🧠 Machine Learning

### Algorithm

- Random Forest Classifier

### Libraries

- Scikit-learn
- Pandas
- NumPy
- Joblib

### Dataset

- Early Stage Diabetes Risk Prediction Dataset (Kaggle)

---

# 🛠️ Tech Stack

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

### Tools

- Git
- GitHub
- VS Code

---

# 🚀 Running the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/hasitapattapu/diabetes-prediction.git
```

## 2. Navigate to the Backend

```bash
cd backend/prediction_backend
```

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

## 4. Start the Flask Backend

```bash
python app.py
```

The backend will start at:

```
http://127.0.0.1:5000
```

## 5. Launch the Frontend

Open the project locally using **VS Code Live Server** (or any local web server) and navigate to:

```
http://127.0.0.1:5500
```

*(The exact port may vary depending on your local server.)*

With both the frontend and Flask backend running locally, the Diabetes Prediction feature will function correctly.

> **Important**
>
> The deployed GitHub Pages website is intended to demonstrate the user interface only. Due to browser security restrictions, a public GitHub Pages site cannot communicate with a locally running Flask server. To use the Machine Learning prediction feature, run both the frontend and backend locally as described above.

---

# 📈 Future Enhancements

- User Authentication
- Cloud Database Integration
- Mobile Application
- Multi-language Support
- Wearable Device Integration
- AI-powered Health Assistant
- Electronic Health Record (EHR) Integration

---

# 📚 References

- Early Stage Diabetes Risk Prediction Dataset (Kaggle)
- Flask Documentation
- Scikit-learn Documentation
- Pandas Documentation

---

# 👨‍💻 Author

Developed as an academic Machine Learning project demonstrating the integration of web development, predictive analytics, and healthcare-focused decision support.

---

# 📄 License

This project is licensed under the **MIT License**.