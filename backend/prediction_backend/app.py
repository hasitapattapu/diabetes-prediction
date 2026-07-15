from flask import Flask, request, jsonify  
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib
import os

app = Flask(__name__)
CORS(app)

# Define absolute paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, 'diabetes_data.csv')
MODEL_PATH = os.path.join(BASE_DIR, 'diabetes_model.pkl')
ENCODER_PATH = os.path.join(BASE_DIR, 'label_encoders.pkl')

# Load and encode the dataset
df = pd.read_csv(DATA_PATH)

label_encoders = {}
for column in df.columns:
    if df[column].dtype == 'object':
        le = LabelEncoder()
        df[column] = le.fit_transform(df[column])
        label_encoders[column] = le

# Separate input and target
X = df.drop('class', axis=1)
print("\n🧠 Columns used in training:")
print(list(X.columns))
y = df['class']

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model and encoders
joblib.dump(model, MODEL_PATH)
joblib.dump(label_encoders, ENCODER_PATH)

@app.route('/')
def home():
    return "✅ Diabetes Prediction Backend is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Load model and encoders
        model = joblib.load(MODEL_PATH)
        label_encoders = joblib.load(ENCODER_PATH)

        # Get and normalize incoming data
        raw_data = request.get_json()
        print("\n🚀 Normalized Incoming Data from Frontend:")
        print(raw_data)

        # Normalize keys (lowercase, underscores)
        normalized_data = {key.strip().lower().replace(" ", "_"): value for key, value in raw_data.items()}

        # Correct column mapping based on trained feature names
        column_mapping = {
            'age': 'Age',
            'gender': 'Gender',
            'polyuria': 'Polyuria',
            'polydipsia': 'Polydipsia',
            'sudden_weight_loss': 'sudden weight loss',
            'weakness': 'weakness',
            'polyphagia': 'Polyphagia',
            'genital_thrush': 'Genital thrush',
            'visual_blurring': 'visual blurring',
            'itching': 'Itching',
            'irritability': 'Irritability',
            'delayed_healing': 'delayed healing',
            'partial_paresis': 'partial paresis',
            'muscle_stiffness': 'muscle stiffness',
            'alopecia': 'Alopecia',
            'obesity': 'Obesity'
        }

        # Apply mapping
        mapped_data = {column_mapping[k]: v for k, v in normalized_data.items()}

        # Convert to DataFrame
        input_df = pd.DataFrame([mapped_data])
        print("\n📋 Input DataFrame with Mapped Columns:")
        print(input_df)

        # Encode categorical columns
        for column in input_df.columns:
            if column in label_encoders:
                le = label_encoders[column]
                input_df[column] = le.transform(input_df[column])

        print("\n🔍 Encoded Input DataFrame:")
        print(input_df)

        # Predict
        prediction = model.predict(input_df)[0]
        print("\n🎯 Raw Model Prediction (encoded):", prediction)

        # Decode prediction result
        result = label_encoders['class'].inverse_transform([prediction])[0]
        print("✅ Final Prediction (decoded):", result)

        return jsonify({'prediction': result})

    except Exception as e:
        print("❌ Error during prediction:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

