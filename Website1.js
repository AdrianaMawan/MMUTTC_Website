// Page Redirection for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetPage = this.getAttribute('href'); // Get the href value
        window.location.href = targetPage; // Redirect to the target page
    });
});

// Page Redirection for Event Registration Button
const registerButton = document.querySelector('section#events button');
if (registerButton) {
    registerButton.addEventListener('click', function () {
        window.location.href = 'events.html'; // Redirect to the events page
    });
}

// Dynamic Gallery
const galleryImages = [

    'Gallery/photo_6091181310371544925_y.jpg',
    'Gallery/photo_6091181310371544926_y.jpg',
    'Gallery/photo_6091181310371544928_y.jpg',
    'Gallery/photo_6091181310371544934_y.jpg'
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
