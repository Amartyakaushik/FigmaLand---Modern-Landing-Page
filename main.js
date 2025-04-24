import $ from 'jquery';

// Video player functionality
const video = document.getElementById('feature-video');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
  }
});

video.addEventListener('pause', () => {
  playButton.style.display = 'flex';
});

video.addEventListener('play', () => {
  playButton.style.display = 'none';
});

// Testimonials slider
const testimonials = [
  {
    logo: '/images/ibm.svg',
    text: 'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.',
    author: {
      name: 'John Doe',
      role: 'UI Designer',
      image: '/images/user1.jpg'
    }
  },
  {
    logo: '/images/ibm.svg',
    text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
    author: {
      name: 'Jane Smith',
      role: 'Product Designer',
      image: '/images/user2.jpg'
    }
  },
  {
    logo: '/images/ibm.svg',
    text: 'Slate is designed for freelancers who want a simple way to plan their schedule.',
    author: {
      name: 'Mike Johnson',
      role: 'Developer',
      image: '/images/user3.jpg'
    }
  }
];

const testimonialsContainer = $('.testimonials-slider');
const dotsContainer = $('.testimonial-dots');
let currentSlide = 0;

// Create dots
testimonials.forEach((_, index) => {
  const dot = $('<div>')
    .addClass('dot')
    .on('click', () => goToSlide(index));
  dotsContainer.append(dot);
});

function updateDots() {
  $('.dot').removeClass('active');
  $('.dot').eq(currentSlide).addClass('active');
}

function createTestimonialElement(testimonial) {
  return `
    <div class="testimonial">
      <img src="${testimonial.logo}" alt="Company Logo" class="testimonial-logo">
      <p>${testimonial.text}</p>
      <div class="testimonial-author">
        <img src="${testimonial.author.image}" alt="${testimonial.author.name}" class="author-image">
        <div class="author-info">
          <h4>${testimonial.author.name}</h4>
          <p>${testimonial.author.role}</p>
        </div>
      </div>
    </div>
  `;
}

function goToSlide(index) {
  currentSlide = index;
  testimonialsContainer.html(createTestimonialElement(testimonials[currentSlide]));
  updateDots();
}

// Initialize first slide
goToSlide(0);

// Auto-advance slides
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  goToSlide(currentSlide);
}, 5000);

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close');

contactForm.addEventListener('submit',
 (e) => {
  e.preventDefault();
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
  contactForm.reset();
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});