from flask import Flask, jsonify
import subprocess
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/launch-script', methods=['GET'])
def launch_script():
    try:
        # Run the .bat script using subprocess
        result = subprocess.run(['script.bat'], capture_output=True, text=True, shell=True)
        
        # Return the output of the script
        return jsonify({'output': result.stdout, 'error': result.stderr})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=5000)