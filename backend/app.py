import cv2
import requests
import spacy
import medspacy
import re
import schedule
import time
# from playsound import playsound

# Load the MedSpaCy model
nlp = spacy.load("en_core_web_sm")

#Our private API key
api_key = "K86040665488957"

#The API url
url = "https://api.ocr.space/parse/image"

#Opening the camera
c = cv2.VideoCapture(0)

if not c.isOpened():
    print("Error: Could not open camera.")
else:
    while True:
        
        ret, frame = c.read()
        if not ret:
            print("Error: Could not read frame.")
            break
        
        cv2.imshow("Camera", frame)
        
        # Key input
        key = cv2.waitKey(1) & 0xFF
        
        if key == 13:  
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

# Example prescription text
prescription_text = extracted_text

# Function to extract medication details
def extract_medication_details(text):
    # Define regex patterns for frequency, dosage, and medication name
    dosage_pattern = r"(\d+(\.\d+)?)\s*(mg|g|mcg|ml)"
    frequency_pattern = r"(once a day|twice a day|three times a day|every day|daily|in the morning|in the evening|every (morning|afternoon|night))"
    medication_pattern = r"\b[A-Z][a-z]*\b"  # Simple pattern for capitalized words (likely drug names)
    
    # Process text with spaCy NLP model
    doc = nlp(text)  # doc is created here
    
    medications = []
    
    # Look for matches for dosage, frequency, and medication name in the text
    for sentence in doc.sents:
        medication_name = None
        dosage = None
        frequency = None
        
        # Try to find the dosage
        dosage_match = re.search(dosage_pattern, sentence.text)
        if dosage_match:
            dosage = dosage_match.group(0)
        
        # Try to find the frequency
        frequency_match = re.search(frequency_pattern, sentence.text, re.IGNORECASE)
        if frequency_match:
            frequency = frequency_match.group(0)
        
        # Try to find the medication name using regex (capitalized words)
        medication_match = re.findall(medication_pattern, sentence.text)
        for word in medication_match:
            if word.lower() not in ["take", "after", "with"]:  # Ignore common stop words
                medication_name = word
                break  # Assume the first capitalized word is the medication name
        
        # Add medication details if all fields are found
        if medication_name and dosage and frequency:
            medications.append({
                'medication_name': medication_name,
                'dosage': dosage,
                'frequency': frequency
            })
    return medications

# Extract medication details from prescription text
medications = extract_medication_details(prescription_text)

# Print the extracted details
if medications:
    for med in medications:
        print(f"Medication Name: {med['medication_name']}")
        print(f"Dosage: {med['dosage']}")
        print(f"Frequency: {med['frequency']}")
        print()
else:
    print("No medication information extracted.")



# Function to play the reminder audio and display the message
def play_audio_reminder(medication):
    print(f"Time to take your {medication['medication_name']} ({medication['dosage']}) {medication['frequency']}")
    #playsound("reminder.mp3")  # Replace with the path to your audio file

# Function to create a reminder
def create_reminder(medication):
    schedule.every().day.at("21:21").do(lambda: play_audio_reminder(medication))

    while True:
        schedule.run_pending()
        time.sleep(1)

# Example of using extracted medication for reminders
for med in medications:
    create_reminder(med)

