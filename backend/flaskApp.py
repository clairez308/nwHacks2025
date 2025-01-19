from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import threading

app = Flask(__name__)
CORS(app)

def run_script():
    print("Starting script execution")
    try:
        result = subprocess.run(['python', 'app.py'], capture_output=True, text=True)
        print(f"Script Output: {result.stdout}")
        print(f"Script Error: {result.stderr}")
        if result.stderr:
            print(f"Error: {result.stderr}")
        return result.stdout, result.stderr
    except Exception as e:
        print(f"Error running the script: {e}")
        return str(e), None

@app.route('/launch-script', methods=['GET'])
def launch_script():
    def background_task():
        print("Background task started")
        output, error = run_script()
        print("Background Task Complete")
        print("Script Output:", output)
        print("Script Error:", error)
        # Note: No return statement here, as it runs in a separate thread

    thread = threading.Thread(target=background_task)
    thread.start()

    print("Main thread continues to return response")
    return jsonify({'message': 'Script is running in the background.'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)