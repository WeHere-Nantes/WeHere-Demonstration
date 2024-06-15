console.log('AR scene loaded successfully!');
// Request access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    // User has granted permission, handle the camera stream
    console.log('Camera access granted');
  })
  .catch(function(error) {
    // User has denied permission or an error occurred
    console.error('Error accessing camera: ', error);
  });