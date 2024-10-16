document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navBar = document.querySelector('.homify-nav');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.classList.add('mobile-menu-btn');
    navBar.prepend(mobileMenuBtn);

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    mobileMenu.innerHTML = `
        <button class="mobile-menu-close">✕</button>
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        <ul class="second-nav">
            <li class="reg"><a href="./register/register.html">REGISTER</a></li>
            <li class="login"><a href="./login-signup/login.html">LOGIN</a></li>
        </ul>
    `;
    document.body.appendChild(mobileMenu);

    const mobileMenuClose = mobileMenu.querySelector('.mobile-menu-close');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });


    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
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

    // House type and Price range dropdowns
    const houseTypeFilter = document.querySelector('.house-filter:first-child');
    const priceRangeFilter = document.querySelector('.house-filter:last-child');

    function createDropdown(container, options, placeholder) {
        const dropdown = document.createElement('select');
        dropdown.innerHTML = `<option value="">${placeholder}</option>` +
            options.map(option => `<option value="${option.value}">${option.label}</option>`).join('');
        container.appendChild(dropdown);
        return dropdown;
    }

    const houseTypeDropdown = createDropdown(houseTypeFilter, [
        {value: 'apartment', label: 'Apartment'},
        {value: 'house', label: 'House'},
        {value: 'duplex', label: 'Duplex'},
        {value: 'bungalow', label: 'Bungalow'},
        {value: 'mansion', label: 'Mansion'}
    ], 'Select House Type');

    const priceRangeDropdown = createDropdown(priceRangeFilter, [
        {value: '0-1000000', label: '₦0 - ₦1,000,000'},
        {value: '1000001-5000000', label: '₦1,000,001 - ₦5,000,000'},
        {value: '5000001-10000000', label: '₦5,000,001 - ₦10,000,000'},
        {value: '10000001-50000000', label: '₦10,000,001 - ₦50,000,000'},
        {value: '50000001+', label: '₦50,000,001+'}
    ], 'Select Price Range');

    houseTypeDropdown.addEventListener('change', function() {
        console.log(`Filtered by house type: ${this.value}`);
        // Implement actual filtering logic here
    });

    priceRangeDropdown.addEventListener('change', function() {
        console.log(`Filtered by price range: ${this.value}`);
        // Implement actual filtering logic here
    });
});