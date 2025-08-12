from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

# API route example
@app.route('/api/test')
def api_test():
    return {'message': 'Hello from Flask API!'}

# Serve React App
@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

# React Router fallback
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
