import pandas as pd

import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import joblib
import numpy as np
# Load the master dataset you created
df = pd.read_csv('master_weather_data.csv')

# --- 1. Select only the columns you need ---
# We need the target (temp_c) and the features (time, lat, lon)
features_df = df[['time', 'temp_c', 'lat', 'lon']].copy()


# --- 2. Convert the 'time' column to a proper datetime format ---
features_df['time'] = pd.to_datetime(features_df['time'])


# --- 3. Create time-based features ---
features_df['day_of_year'] = features_df['time'].dt.dayofyear
features_df['month'] = features_df['time'].dt.month
features_df['year'] = features_df['time'].dt.year


# --- 4. Create cyclical features for the day of the year ---
# This helps the model understand that Day 365 is close to Day 1
features_df['day_sin'] = np.sin(2 * np.pi * features_df['day_of_year'] / 365.25)
features_df['day_cos'] = np.cos(2 * np.pi * features_df['day_of_year'] / 365.25)


# --- 5. Clean up the final DataFrame ---
# Drop rows with any missing values
features_df.dropna(inplace=True)

# Drop the original time and day_of_year columns as they are no longer needed
final_df = features_df.drop(['time', 'day_of_year'], axis=1)


# --- 6. Verify the result ---
print("Feature Engineering Complete")
print(final_df.head())

# Save the final, model-ready data
final_df.to_csv('model_ready_data.csv', index=False)
print("\nModel-ready data saved to 'model_ready_data.csv'")

#-------------------------------------------------------------------------------



# --- You can keep your feature engineering code above this ---


# (This follows your feature engineering code which ends with creating 'final_df')

# --- 1. Define Features (X) and Target (y) using the correct DataFrame ---
# Use 'final_df', which already has all your new features.
features = ['lat', 'lon', 'month', 'year', 'day_sin', 'day_cos']
target = 'temp_c'

X = final_df[features]
y = final_df[target]

# --- 2. Split Data into Training and Testing Sets ---
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# --- 3. Initialize and Train the Model ---
import lightgbm as lgb
print("🚀 Training the temperature model...")
temp_model = lgb.LGBMRegressor(n_estimators=1000, random_state=42)
temp_model.fit(X_train, y_train)
print("Model training complete")

# --- 4. Evaluate the Model ---
from sklearn.metrics import mean_squared_error
import numpy as np
predictions = temp_model.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, predictions))
print(f"Model Performance (RMSE): {rmse:.2f}°C")

# --- 5. Save the Trained Model ---
import joblib
joblib.dump(temp_model, 'temp_model.pkl')
print("Temperature model saved to 'temp_model.pkl'")