import pandas as pd
import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import joblib
import numpy as np

# Load the master dataset you created
df = pd.read_csv('../data/master_weather_data.csv')

# --- 1. Select columns needed for the RAIN model ---
# We now include 'will_it_rain' from the start
features_df = df[['time', 'lat', 'lon', 'will_it_rain']].copy()

# --- 2. Convert the 'time' column to a proper datetime format ---
features_df['time'] = pd.to_datetime(features_df['time'])

# --- 3. Create time-based features ---
features_df['day_of_year'] = features_df['time'].dt.dayofyear
features_df['month'] = features_df['time'].dt.month
features_df['year'] = features_df['time'].dt.year

# --- 4. Create cyclical features ---
features_df['day_sin'] = np.sin(2 * np.pi * features_df['day_of_year'] / 365.25)
features_df['day_cos'] = np.cos(2 * np.pi * features_df['day_of_year'] / 365.25)

# --- 5. Clean up the final DataFrame ---
features_df.dropna(inplace=True)
final_df = features_df.drop(['time', 'day_of_year'], axis=1)

# --- 6. Verify the result ---
print(" Feature Engineering Complete for Rain Model!")
print(final_df.head())


# ------------------ Train the Rain Model ------------------

# --- 1. Define Features (X) and Target (y_rain) ---
features = ['lat', 'lon', 'month', 'year', 'day_sin', 'day_cos']
X = final_df[features]
y_rain = final_df['will_it_rain']

# --- 2. Split Data ---
X_train, X_test, y_train, y_test = train_test_split(X, y_rain, test_size=0.2, random_state=42)

# --- 3. Initialize and Train a CLASSIFIER Model ---
print("Training the rain prediction model...")
rain_model = lgb.LGBMClassifier(objective='binary', n_estimators=1000, random_state=42)
rain_model.fit(X_train, y_train)
print("Rain model training complete!")

# --- 4. Evaluate the Model ---
predictions = rain_model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Rain Model Accuracy: {accuracy*100:.2f}%")

# --- 5. Save the Trained Model ---
joblib.dump(rain_model, '../models/rain_model.pkl')
print("Rain model saved to 'rain_model.pkl'")