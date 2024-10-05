// Create the box element
const box = document.createElement('div');
box.style.backgroundColor = 'rgb(142, 42, 142)';
box.style.width = '80%';  // Set width responsive
box.style.maxWidth = '400px';  // Max width for larger screens
box.style.height = 'auto';  // Auto height to adjust content size
box.style.padding = '20px';  // Add padding for content
box.style.position = 'fixed';
box.style.top = '50%';
box.style.left = '50%';
box.style.transform = 'translate(-50%, -50%)';
box.style.display = 'flex';
box.style.flexDirection = 'column';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';
box.style.borderRadius = '10px';
box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
box.style.textAlign = 'center';

// Create the h1 element
const h1 = document.createElement('h1');
h1.textContent = 'Creativity !!';
h1.style.color = 'white';
h1.style.fontSize = '2em';  // Responsive font size

// Create the h2 element
const h2 = document.createElement('h2');
h2.textContent = 'Takes time and effort.';
h2.style.color = 'white';
h2.style.fontSize = '1.2em';  // Responsive font size

// Append the h1 and h2 to the box
box.appendChild(h1);
box.appendChild(h2);

// Append the box to the body
document.body.appendChild(box);
