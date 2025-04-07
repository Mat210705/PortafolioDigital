// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
});

// Create Vue application
const app = Vue.createApp({
    data() {
        return {
           box1: false // State to control form visibility
        }
    },

    methods: {
        // Toggle form visibility to true (show form)
        modalForm() {
            this.box1 = true;
        },
        
        // Toggle form visibility to false (hide form)
        cerrarModalForm() {
            this.box1 = false;
        }
    }
});

// Mount the Vue app to the DOM element with id "app"
const appInstance = app.mount("#app");

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Check if images are loaded correctly
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    console.log('All images loaded successfully');
                }
            });
            
            img.addEventListener('error', () => {
                console.error('Failed to load image:', img.src);
            });
        }
    });
});

// Add viewport height fix for mobile browsers
function setVhUnit() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set the viewport height initially and on resize
setVhUnit();
window.addEventListener('resize', setVhUnit);