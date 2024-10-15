document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navBar = document.getElementById('nav-bar');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.textContent = '☰';
    mobileMenuBtn.classList.add('mobile-menu-btn');
    navBar.prepend(mobileMenuBtn);

    mobileMenuBtn.addEventListener('click', function() {
        navBar.classList.toggle('mobile-menu-open');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Features image slider
    const featuresContainer = document.querySelector('.features-image');
    const images = featuresContainer.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    setInterval(showNextImage, 3000);

    // Load more functionality for recommendations
    const loadMoreBtn = document.querySelector('.loadmore p');
    const recommendationContainer = document.querySelector('.recommendation-secondcontainer');

    loadMoreBtn.addEventListener('click', function() {
        // Simulating loading more items
        for (let i = 0; i < 3; i++) {
            const newCard = recommendationContainer.children[0].cloneNode(true);
            recommendationContainer.appendChild(newCard);
        }
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Autosuggest for search input
    const searchInput = document.querySelector('.recommendation-search input');
    const suggestions = ['Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi', 'Ajah', 'Surulere', 'Yaba', 'Maryland', 'Magodo', 'Gbagada'];
    
    searchInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const matchingSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().startsWith(inputValue)
        );

        const datalist = document.getElementById('search-suggestions') || document.createElement('datalist');
        datalist.id = 'search-suggestions';
        datalist.innerHTML = matchingSuggestions.map(suggestion => `<option value="${suggestion}">`).join('');
        
        if (!document.getElementById('search-suggestions')) {
            document.body.appendChild(datalist);
            this.setAttribute('list', 'search-suggestions');
        }
    });

    // House type dropdown
    const houseTypeFilter = document.querySelector('.house-filter:first-child');
    const houseTypeDropdown = document.createElement('select');
    houseTypeDropdown.innerHTML = `
        <option value="">Select House Type</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="duplex">Duplex</option>
        <option value="bungalow">Bungalow</option>
        <option value="mansion">Mansion</option>
    `;
    houseTypeFilter.appendChild(houseTypeDropdown);

    houseTypeDropdown.addEventListener('change', function() {
        console.log(`Filtered by house type: ${this.value}`);
        // Implement actual filtering logic here
    });

    // Price range dropdown
    const priceRangeFilter = document.querySelector('.house-filter:last-child');
    const priceRangeDropdown = document.createElement('select');
    priceRangeDropdown.innerHTML = `
        <option value="">Select Price Range</option>
        <option value="0-1000000">₦0 - ₦1,000,000</option>
        <option value="1000001-5000000">₦1,000,001 - ₦5,000,000</option>
        <option value="5000001-10000000">₦5,000,001 - ₦10,000,000</option>
        <option value="10000001-50000000">₦10,000,001 - ₦50,000,000</option>
        <option value="50000001+">₦50,000,001+</option>
    `;
    priceRangeFilter.appendChild(priceRangeDropdown);

    priceRangeDropdown.addEventListener('change', function() {
        console.log(`Filtered by price range: ${this.value}`);
        // Implement actual filtering logic here
    });
});