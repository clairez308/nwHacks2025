import json
import sys
from flask import Flask, jsonify
import subprocess
from flask_cors import CORS
from app import main


app = Flask(__name__)
CORS(app)

@app.route('/launch-script', methods=['GET'])
def launch_script():
    try:
        # Run the .bat script using subprocess
        # ['script.bat'], capture_output=True, text=True, shell=True
        result = main()
        # result = subprocess.run(['script.bat'], stdout=subprocess.PIPE)
        with open("C:\\Users\\krava\\OneDrive\\UBCV\\HACKATHON\\nwHacks2025-1\\frontend\\src\\text.txt") as f:
            r = f.read()
            print(r)
        
        with open("output.txt","w") as f:
            json.dump(result,f)

        # Return the output of the script
        # return jsonify({'output': result.stdout, 'error': result.stderr})
        return jsonify({'output': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug = True)
