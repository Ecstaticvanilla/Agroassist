import requests
import os

# Get your API key from an environment variable for security
API_KEY = os.environ.get('OPENWEATHER_API_KEY')

def get_weather_forecast(city_name="Mumbai"):
    """Fetches 5-day/3-hour weather forecast data for a given city."""
    if not API_KEY:
        print("Error: API key not found.")
        return None

    forecast_url = "http://api.openweathermap.org/data/2.5/forecast"
    params = {
        'q': city_name,
        'appid': API_KEY,
        'units': 'metric'  # For Celsius
    }

    try:
        response = requests.get(forecast_url, params=params)
        response.raise_for_status()  # Raises an error for bad status codes
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None