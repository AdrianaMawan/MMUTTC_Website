// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Popup Alert for Event Registration Button
const registerButton = document.querySelector('section#events button');
registerButton.addEventListener('click', function () {
    alert('Thank you for your interest! Event registration is coming soon.');
});

// Dynamic Gallery
const galleryImages = [
    'https://via.placeholder.com/300/0047AB/FFFFFF?text=Event+1',
    'https://via.placeholder.com/300/0047AB/FFFFFF?text=Event+2',
    'https://via.placeholder.com/300/0047AB/FFFFFF?text=Event+3'
];

let currentImageIndex = 0;

function updateGallery() {
    const galleryImageElement = document.querySelector('section#gallery img');
    if (galleryImageElement) {
        galleryImageElement.src = galleryImages[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    }
}

// Change gallery image every 3 seconds
setInterval(updateGallery, 3000);