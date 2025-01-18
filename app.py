import cv2

c = cv2.VideoCapture(0)
n = 1
if not c.isOpened():
    print("Error: Could not open camera.")
else:
    print("Press 's' to save the image or 'q' to quit.")

    while True:
        
        ret, frame = c.read()
        if not ret:
            print("Error: Could not read frame.")
            break
        
        cv2.imshow("Camera", frame)
        
        # Key input
        key = cv2.waitKey(1) & 0xFF
        
        if key == ord('s'):  
            cv2.imwrite("captured_image"+str(n)+".jpg", frame)
            print("Image saved as 'captured_image" + str(n) + ".jpg'.")
            n+=1
        elif key == ord('q'):
            break

c.release()
cv2.destroyAllWindows()

