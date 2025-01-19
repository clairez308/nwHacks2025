import requests

# Replace with your OCR Space API key
api_key = "K86040665488957"

# The URL for OCR Space API
url = "https://api.ocr.space/parse/image"

# Path to the image you want to process
image_path = "captured_image1.jpg"

# Open the image file
with open(image_path, 'rb') as f:
    # Define the request payload
    payload = {
        'apikey': api_key,  # Your OCR API key
        'language': 'eng'   # Language of the text in the image (use 'eng' for English)
    }
    
    # Define the files (image) to send in the request
    files = {'file': f}
    
    # Make the POST request
    response = requests.post(url, data=payload, files=files)
    
    # Get the JSON response from the OCR API
    result = response.json()
    
    # Check if the response is successful
    if result['OCRExitCode'] == 1:
        # Extract the text
        extracted_text = result['ParsedResults'][0]['ParsedText']
        print("Extracted Text: ", extracted_text)
    else:
        print("Error: ", result['ErrorMessage'])
