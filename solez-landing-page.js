// Services data
const services = [
  {
    icon: "fas fa-oil-can",
    title: "Full and Interim Services",
    description: "Complete vehicle health checks and maintenance to keep your car running smoothly."
  },
  {
    icon: "fas fa-car-side",
    title: "MOT (collect and drop off)",
    description: "Hassle-free MOT service with collection and delivery of your vehicle."
  },
  {
    icon: "fas fa-cogs",
    title: "Clutch and Gearbox Replacement",
    description: "Expert replacement and repair services for clutch and gearbox issues."
  },
  {
    icon: "fas fa-car",
    title: "Brake Pad and Disc Replacement",
    description: "Ensure your safety with our professional brake system maintenance and repair."
  },
  {
    icon: "fas fa-search",
    title: "Diagnostics and Fault Finding",
    description: "Advanced diagnostic tools to identify and fix issues efficiently."
  },
  {
    icon: "fas fa-wrench",
    title: "Engine Swaps and Repairs",
    description: "Complete engine overhaul, repair, and replacement services."
  },
  {
    icon: "fas fa-truck-monster",
    title: "Diesel Engine Repair Services",
    description: "Specialized diesel engine diagnostics, repair, and maintenance by certified technicians.",
    fullWidth: true
  }
];

// Testimonials data
const testimonials = [
  {
    rating: 5,
    text: "Brilliant service..he came to see my wheichle 9.30 pm . Took his time and explained everything about my wheichle potential problems. Highly recommend!",
    name: "tomas jurkstas",
    location: "London"
  },
  {
    rating: 5,
    text: "Solez Mechanics provided exceptional service – fast, affordable, and transparent. They fixed my car fast and at an unbeatable price and kept me updated with photos and videos throughout the repair process. Highly recommend Suleman for his top-notch service and honesty!",
    name: "Ronja Kunzmann",
    location: "Croydon"
  },
  {
    rating: 4.5,
    text: "Highly recommended, turned up at the agreed time to fix a locking rod issue on my BMW 640i, reasonable fair cost. Will use again in the future.",
    name: "Ahmed Khan",
    location: "Wimbledon"
  }
];

// Gallery images data
const galleryImages = [
  {
    src: "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg?ga=GA1.1.586831257.1746381993&semt=ais_hybrid&w=740",
    alt: "Mechanic working on engine",
    title: "Engine Repair"
  },
  {
    src: "https://media.istockphoto.com/id/522394158/photo/car-service-procedure.jpg?s=612x612&w=0&k=20&c=SXPyg7yMw0Uc4LuI59lchMouvjJ3z6r5oNKO7mdnHCc=",
    alt: "Brake disc replacement",
    title: "Brake Service"
  },
  {
    src: "https://media.istockphoto.com/id/1415260442/photo/car-engine-oil-is-poured-into-the-engine-close-up.jpg?s=612x612&w=0&k=20&c=9v-sjtCMVTX3Wf6hszlZgJqq4i2UgUEVMhkefT-aGRM=",
    alt: "Oil change service",
    title: "Oil Service"
  },
  {
    src: "https://media.gettyimages.com/id/511317032/photo/mechanic-technician-on-a-garage.jpg?s=612x612&w=0&k=20&c=-qcn7ekOcIOq1oSVCL9HJiDQbr7SjlfncK2cVxFDIV0=",
    alt: "Mobile mechanic van",
    title: "Mobile Service"
  },
  {
    src: "https://media.istockphoto.com/id/1350239751/photo/car-diagnostic-service-and-electronics-repair.jpg?s=612x612&w=0&k=20&c=6xSgzMp9KJJ8lN0hC1UcuqXuuZMLNFCgCkcju-Q0BTU=",
    alt: "Car diagnostic check",
    title: "Diagnostics"
  },
  {
    src: "https://media.istockphoto.com/id/1423937450/photo/mechanic-changing-car-wheel-in-auto-service-using-pneumatic-wrench.jpg?s=612x612&w=0&k=20&c=94YEMPlU2n9BK_r4g7JZSm1jAnVAeFgbQ3YCW7hr2pM=",
    alt: "Tire replacement",
    title: "Tire Service"
  }
];

// DOM elements
const header = document.getElementById('header');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const mobileMenu = document.getElementById('mobileMenu');
const servicesGrid = document.querySelector('#services .grid');
const galleryGrid = document.querySelector('#gallery .grid');
const testimonialsGrid = document.querySelector('#testimonials .grid');
const contactForm = document.getElementById('contactForm');
const currentYearElement = document.getElementById('current-year');

// Helper function to create a star rating display
function createStarRating(rating) {
  let starsHtml = '';
  
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      starsHtml += '<i class="fas fa-star"></i>';
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      starsHtml += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsHtml += '<i class="far fa-star"></i>';
    }
  }
  
  return starsHtml;
}

// Initialize the page content
function initPageContent() {
  // Populate services
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = `service-card ${service.fullWidth ? 'lg:col-span-3' : ''}`;
    serviceCard.innerHTML = `
      <div class="text-secondary text-3xl mb-4">
        <i class="${service.icon}"></i>
      </div>
      <h3 class="font-poppins font-semibold text-xl mb-2">${service.title}</h3>
      <p class="text-muted-foreground">${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
  });
  
  // Populate gallery
  galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'group overflow-hidden rounded-xl border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl relative';
    galleryItem.innerHTML = `
      <div class="aspect-video overflow-hidden">
        <img 
          src="${image.src}" 
          alt="${image.alt}" 
          class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div class="p-5 w-full">
          <h3 class="font-poppins font-semibold text-xl text-white">${image.title}</h3>
        </div>
      </div>
    `;
    galleryGrid.appendChild(galleryItem);
  });
  
  // Populate testimonials
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'bg-background rounded-xl p-6 shadow-lg border border-gray-800';
    testimonialCard.innerHTML = `
      <div class="rating mb-3">
        ${createStarRating(testimonial.rating)}
      </div>
      <p class="italic mb-4 text-muted-foreground">"${testimonial.text}"</p>
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-primary mr-3">
          <i class="fas fa-user"></i>
        </div>
        <div>
          <h4 class="font-medium">${testimonial.name}</h4>
          <p class="text-sm text-muted-foreground">${testimonial.location}</p>
        </div>
      </div>
    `;
    testimonialsGrid.appendChild(testimonialCard);
  });
  
  // Set current year in footer
  currentYearElement.textContent = new Date().getFullYear();
}

// Toggle mobile menu
function toggleMobileMenu() {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    mobileMenuIcon.classList.remove('fa-bars');
    mobileMenuIcon.classList.add('fa-times');
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenuIcon.classList.remove('fa-times');
    mobileMenuIcon.classList.add('fa-bars');
  }
}

// Scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
  
  // Close mobile menu if open
  if (!mobileMenu.classList.contains('hidden')) {
    toggleMobileMenu();
  }
}

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.remove('py-3');
    header.classList.add('py-2');
  } else {
    header.classList.remove('py-2');
    header.classList.add('py-3');
  }
  
  // Reveal elements on scroll
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Form validation
function validateForm() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  
  // Reset errors
  nameError.textContent = '';
  nameError.classList.add('hidden');
  phoneError.textContent = '';
  phoneError.classList.add('hidden');
  emailError.textContent = '';
  emailError.classList.add('hidden');
  messageError.textContent = '';
  messageError.classList.add('hidden');
  
  let isValid = true;
  
  if (!name.trim()) {
    nameError.textContent = 'Name is required';
    nameError.classList.remove('hidden');
    document.getElementById('name').classList.add('border-destructive');
    isValid = false;
  } else {
    document.getElementById('name').classList.remove('border-destructive');
  }
  
  if (!phone.trim()) {
    phoneError.textContent = 'Phone number is required';
    phoneError.classList.remove('hidden');
    document.getElementById('phone').classList.add('border-destructive');
    isValid = false;
  } else {
    document.getElementById('phone').classList.remove('border-destructive');
  }
  
  if (!email.trim()) {
    emailError.textContent = 'Email is required';
    emailError.classList.remove('hidden');
    document.getElementById('email').classList.add('border-destructive');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.classList.remove('hidden');
    document.getElementById('email').classList.add('border-destructive');
    isValid = false;
  } else {
    document.getElementById('email').classList.remove('border-destructive');
  }
  
  if (!message.trim()) {
    messageError.textContent = 'Message is required';
    messageError.classList.remove('hidden');
    document.getElementById('message').classList.add('border-destructive');
    isValid = false;
  } else {
    document.getElementById('message').classList.remove('border-destructive');
  }
  
  return isValid;
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  if (validateForm()) {
    const submitButton = document.getElementById('submitButton');
    const submitSuccess = document.getElementById('submitSuccess');
    
    // Show loading state
    submitButton.innerHTML = `
      <span class="flex items-center">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </span>
    `;
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Show success message
      submitButton.innerHTML = 'Send Message';
      submitButton.disabled = false;
      submitSuccess.classList.remove('hidden');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        submitSuccess.classList.add('hidden');
      }, 3000);
    }, 1000);
  }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initPageContent();
  
  // Add event listeners
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  contactForm.addEventListener('submit', handleFormSubmit);
  window.addEventListener('scroll', handleScroll);
  
  // Initialize reveal effect
  handleScroll();
  
  // Make scrollToSection function available globally
  window.scrollToSection = scrollToSection;
});
