// Testimonial data
const testimonials = [
    {
        name: "John Doe",
        role: "UI Designer",
        image: "assets/testimonial1.jpg",
        text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
    },
    {
        name: "Mike Johnson",
        role: "Developer",
        image: "assets/testimonial2.jpg",
        text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
    },
    {
        name: "Jane Smith",
        role: "Product Manager",
        image: "assets/testimonial3.jpg",
        text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
    }
];

let currentTestimonial = 0;

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    
    // Update content
    document.querySelector('.testimonial p').textContent = testimonial.text;
    document.querySelector('.author-info h4').textContent = testimonial.name;
    document.querySelector('.author-info p').textContent = testimonial.role;
    document.querySelector('.author-image img').src = testimonial.image;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize dots
document.addEventListener('DOMContentLoaded', () => {
    const dotsContainer = document.querySelector('.testimonial-dots');
    
    // Create dots
    testimonials.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentTestimonial = i;
            updateTestimonial(i);
        });
        dotsContainer.appendChild(dot);
    });
    
    // Set initial testimonial
    updateTestimonial(0);
}); 