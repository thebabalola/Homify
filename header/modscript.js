// JavaScript for Features Image Slider

const images = document.querySelectorAll('.features-image img');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentIndex = 0;
const totalImages = images.length;

// Function to show the current image
function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
      img.classList.remove('inactive');
    } else {
      img.classList.remove('active');
      img.classList.add('inactive');
    }
  });
}

// Function to move to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

// Function to move to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Event listeners for arrow buttons
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', prevImage);

// Automatic image sliding every 3 seconds
setInterval(nextImage, 3000);

// Initial display of the first image
showImage(currentIndex);
