const quantity = document.querySelector(".quantity");
const pack1 = document.querySelector("#pack1");
const pack2 = document.querySelector("#pack2");
const pack3 = document.querySelector("#pack3");
const amount = document.querySelector("#amount");

let value = 1;
let price = 799;
let selectPack = "Pack of 8 (1 of each)";

const onchangePack =  (val) => {

    price = val; //updating the amount;
    console.log(price);
    // upadting the price of the element;
     amount.innerHTML = `$ ${price}`;
    // Change the backgound color of the element;
    if(price === 799){
        selectPack = "Pack of 8 (1 of each)";
        pack1.classList.add("add-btn");
        pack2.classList.remove("add-btn");
         pack3.classList.remove("add-btn");
    }

    if(price === 1599){
        selectPack = "Pack of 16 (2 of each)";
        pack2.classList.add("add-btn");
        pack1.classList.remove("add-btn");
        pack3.classList.remove("add-btn");
    }

    if(price === 2399){
        selectPack = "Pack of 24 (3 of each)";
        pack3.classList.add("add-btn");
        pack2.classList.remove("add-btn");
        pack1.classList.remove("add-btn");
    }
 }

//  Function to increment the value
const Increment = () => {
    value+=1;
    quantity.innerHTML = value;
}

// Function to decrement the value
const Decrement = () => {
    if(value>1)
    value-=1;
    quantity.innerHTML = value;
}

// Function to show the popup
function showPopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    popup.innerHTML = `
    <p>Item added to your cart</p>
    <p>Assorted Cocktail Mixer Pack</p>
    <p>Pack Size: ${selectPack}</p>
    <p>Total amount is $ ${value*price}</p>
    <button id="close-btn" onclick="hidePopup()">Close</button>
    `;
    overlay.style.display = 'flex'; // Show the overlay
}

// Function to hide the popup
function hidePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide the overlay
}

const addtoCart = () => {
    showPopup();
}


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

// Automatic slideshow function
function startAutoSlide() {
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, interval);
}

const left = document.querySelector(".left");
const mainContainer = document.querySelector(".media-container");
const media = document.querySelectorAll(".media");
const responsive = () => {
    const screenWidth = window.innerWidth;
    if(screenWidth<768){
        // add the class to the element;
        left.classList.add("carousel");
        mainContainer.classList.add("carousel-inner");
        media.forEach((element) => {
            element.classList.add("carousel-item");
        });

        // remove the class from the element;
        document.querySelector(".carousel").classList.remove("left");
        document.querySelector(".carousel-inner").classList.remove("media-container");
        document.querySelectorAll(".media").forEach((element) => {
            element.classList.remove("media");
        });

        // Start with the first slide and initiate automatic slideshow
        showSlide(currentIndex);
        startAutoSlide();
    }
}

responsive();
window.addEventListener('resize', responsive);