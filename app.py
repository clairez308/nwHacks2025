import cv2
import requests
import spacy
import medspacy

# Load the MedSpaCy model
nlp = spacy.load("en_medspacy_model")

#Our private API key
api_key = "K86040665488957"

#The API url
url = "https://api.ocr.space/parse/image"

#Opening the camera
c = cv2.VideoCapture(0)

if not c.isOpened():
    print("Error: Could not open camera.")
else:
    print("Press 's' to save the image")

    while True:
        
        ret, frame = c.read()
        if not ret:
            print("Error: Could not read frame.")
            break
        
        cv2.imshow("Camera", frame)
        
        # Key input
        key = cv2.waitKey(1) & 0xFF
        
        if key == ord('s'):  
            image_path = "captured_image1.jpg"
            cv2.imwrite(image_path, frame)
            print("Image saved as "+image_path+ ".") #can remove later
            break

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
        print("Extracted Text: \n"+ extracted_text)
    else:
        print("Error: ", result['ErrorMessage'])

c.release()
cv2.destroyAllWindows()

# Process the text
doc = nlp(extracted_text)

# Extract clinical entities
for ent in doc.ents:
    print(ent.text, ent.label_)
