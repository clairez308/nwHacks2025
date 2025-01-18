from google.cloud import vision
import io

# Set up the Google Vision client
def initialize_client(json_key_path):
    client = vision.ImageAnnotatorClient.from_service_account_json(json_key_path)
    return client

# Perform text detection
def detect_text(image_path, client):
    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()
    
    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations

    if response.error.message:
        raise Exception(f"Error during text detection: {response.error.message}")
    
    return texts

# Main function
def main():
    # Replace with the path to your service account JSON key
    json_key_path = "788514574321-ahs82f49c8iqk40mt5aoit7qedjgjn34.apps.googleusercontent.com"
    image_path = "path/to/your/image.jpg"

    # Initialize the client
    client = initialize_client(json_key_path)
    
    # Detect text
    texts = detect_text(image_path, client)

    # Print detected text
    print("Detected text:")
    for text in texts:
        print(f"\n{text.description}")

if __name__ == "__main__":
    main()
