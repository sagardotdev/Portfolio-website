const images = document.querySelectorAll('.floating-img');
const container = document.querySelector('.image-container');

function getRandomPosition() {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const x = Math.floor(Math.random() * (containerWidth - 100)); // Adjust for image width
  const y = Math.floor(Math.random() * (containerHeight - 100)); // Adjust for image height
  return { x, y };
}

function moveImages() {
  images.forEach(img => {
    const { x, y } = getRandomPosition();
    img.style.transform = `translate(${x}px, ${y}px)`; // Move the image to the random position
  });
}

// Move the images every 2 seconds (adjust timing as necessary)
setInterval(moveImages, 2000);