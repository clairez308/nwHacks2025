import spacy
import re

# Load spaCy's language model
nlp = spacy.load("en_core_web_sm")

# Example prescription text
prescription_text = """
Take 20 mg of Lisinopril once a day after meals. 
Take 5 mg of Amlodipine twice a day in the morning and evening. 
Take 50 mg of Metformin three times a day with food.
"""

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
