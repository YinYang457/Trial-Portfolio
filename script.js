document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Check if the target is an internal section (for smooth scrolling)
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default only for internal links
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // If it's an external link (like about.html), do not prevent default
        });
    });

    // Change background color on button click
    const changeBgButton = document.getElementById('change-bg');
    if (changeBgButton) { // Check if the button exists
        changeBgButton.addEventListener('click', function() {
            const colors = ['#ffcc00', '#35424a', '#2ecc71', '#e74c3c', '#3498db'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });
    }

    // Scroll animation for sections
    const sections = document.querySelectorAll('section, .project'); // Select both sections and project boxes
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section and project
    });
});