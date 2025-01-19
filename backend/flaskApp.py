from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import threading

app = Flask(__name__)
CORS(app)

# Function to run the Python script
def run_script():
    print("HERE!!!@!!")
    try:
        result = subprocess.run(['python', 'app.py'], capture_output=True, text=True)
        if result.stderr:
            print(f"Error: {result.stderr}")
        return result.stdout, result.stderr
    except Exception as e:
        print(f"Error running the script: {e}")
        return str(e), None

# Flask route to launch the script
@app.route('/launch-script', methods=['GET'])
def launch_script():
    def background_task():
        output, error = run_script()
        print("Script Output:", output)
        print("Script Error:", error)

    # Start the background task in a separate thread
    thread = threading.Thread(target=background_task)
    thread.start()

    # Return an immediate response to the client
    return jsonify({'message': 'Script is running in the background.'})

if __name__ == '__main__':
    # Run Flask in threaded mode
    app.run(host='0.0.0.0', port=5000, threaded=True)

# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return "Flask server is running!"

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)
