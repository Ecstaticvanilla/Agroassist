import pandas as pd
import numpy as np
import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load your trained model when the app starts
model = joblib.load('temp_model.pkl')

@app.route('/predict', methods=['GET'])
def predict():
    # 1. Get latitude and longitude from the request arguments
    try:
        lat = float(request.args.get('lat'))
        lon = float(request.args.get('lon'))
    except (TypeError, ValueError):
        return jsonify({"error": "Please provide valid 'lat' and 'lon' parameters."}), 400

    # 2. Perform the exact same feature engineering as in training
    today = pd.Timestamp.now()
    month = today.month
    year = today.year
    day_of_year = today.dayofyear
    day_sin = np.sin(2 * np.pi * day_of_year / 365.25)
    day_cos = np.cos(2 * np.pi * day_of_year / 365.25)

    # 3. Create a DataFrame for the model's input
    # The model expects the features in the same order as in training
    features = pd.DataFrame([[lat, lon, month, year, day_sin, day_cos]],
                            columns=['lat', 'lon', 'month', 'year', 'day_sin', 'day_cos'])

    # 4. Make a prediction
    prediction = model.predict(features)

    # 5. Return the result as JSON
    return jsonify({'predicted_temperature_celsius': prediction[0]})

if __name__ == '__main__':
    app.run(port=5000, debug=True)