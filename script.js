function volume_sphere(event) {
  // Prevent form submission to avoid page refresh
  event.preventDefault();

  // Get the radius input value
  const radius = document.getElementById('radius').value;

  // Validate the radius input: It should be a non-negative number
  const radiusNum = parseFloat(radius);
  if (isNaN(radiusNum) || radiusNum < 0) {
    document.getElementById('volume').value = 'NaN'; // Invalid input, show 'NaN'
    return;
  }

  // Calculate the volume of the sphere using the formula
  const volume = (4 / 3) * Math.PI * Math.pow(radiusNum, 3);

  // Round the volume to 4 decimal places and display it
  document.getElementById('volume').value = volume.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
