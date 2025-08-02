import pandas as pd

# Load the datasets
forecast_df = pd.read_csv('forecast_data.csv')
locations_df = pd.read_csv('location_data.csv')

# --- This is the corrected merge line ---
master_df = pd.merge(forecast_df, locations_df, left_on='city', right_on='name', how='inner')

# Now the rest of the script will work
print("merge successful")
print(master_df.head())

# Optional: Save the merged data
master_df.to_csv('master_weather_data.csv', index=False)