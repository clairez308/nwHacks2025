import spacy
import medspacy

# Load the MedSpaCy model
nlp = spacy.load("en_medspacy_model")

text = "The patient was prescribed Metformin 500mg, twice daily, for type 2 diabetes."

# Process the text
doc = nlp(text)

# Extract clinical entities
for ent in doc.ents:
    print(ent.text, ent.label_)