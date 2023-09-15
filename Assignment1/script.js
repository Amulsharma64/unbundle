

// Get references to the carousel elements
const carouselItems = document.querySelectorAll('.carousel-item');
let interval=2000; // Change image every 2000 milliseconds (2 second)
let currentIndex = 0; // Initialize variables to keep track of the active slide


// Function to show the slide
function showSlide(index) {
    if (index < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * 100;

    document.querySelector('.carousel-inner').style.transform = `translateX(${translateX}%)`;
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Function to move to the next slide
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Automatic slideshow function
function startAutoSlide() {
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, interval);
}

// Start with the first slide and initiate automatic slideshow
showSlide(currentIndex);
startAutoSlide();

       
