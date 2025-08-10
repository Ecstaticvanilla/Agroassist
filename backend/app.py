import pandas as pd
import numpy as np
import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load BOTH of your trained models when the app starts
try:
    temp_model = joblib.load('models/temp_model.pkl')
    rain_model = joblib.load('models/rain_model.pkl')
except FileNotFoundError as e:
    print(f"Error loading models: {e}. Make sure model files are in the directory.")
    # Exit or handle the error appropriately
    exit()

@app.route('/predict/all', methods=['GET'])
def predict_all():
    # 1. Get latitude and longitude from the request
    try:
        lat = float(request.args.get('lat'))
        lon = float(request.args.get('lon'))
    except (TypeError, ValueError):
        return jsonify({"error": "Please provide valid 'lat' and 'lon' parameters."}), 400

    # 2. Perform feature engineering once for both models
    today = pd.Timestamp.now()
    month = today.month
    year = today.year
    day_of_year = today.dayofyear
    day_sin = np.sin(2 * np.pi * day_of_year / 365.25)
    day_cos = np.cos(2 * np.pi * day_of_year / 365.25)

    # 3. Create the feature DataFrame for prediction
    features = pd.DataFrame([[lat, lon, month, year, day_sin, day_cos]],
                            columns=['lat', 'lon', 'month', 'year', 'day_sin', 'day_cos'])

    # 4. Make predictions with BOTH models
    temp_prediction = temp_model.predict(features)
    # Get the probability of rain (class 1)
    rain_prediction_prob = rain_model.predict_proba(features)[:, 1]

    # 5. Combine results into a single JSON response
    return jsonify({
        'predicted_temperature_celsius': temp_prediction[0],
        'predicted_rain_probability': rain_prediction_prob[0]
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)