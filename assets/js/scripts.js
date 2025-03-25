document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded and ready.');

    // Mock data for boarding houses
    const boardingHouses = [
        {
            id: 1,
            location: 'New York',
            price: 300,
            amenities: ['wifi', 'parking'],
            name: 'Cozy Apartment in NY',
            description: 'A cozy apartment in the heart of New York.',
            image: 'path/to/image1.jpg'
        },
        {
            id: 2,
            location: 'Los Angeles',
            price: 400,
            amenities: ['wifi', 'laundry'],
            name: 'Modern Loft in LA',
            description: 'A modern loft with all amenities in Los Angeles.',
            image: 'path/to/image2.jpg'
        },
        // Add more boarding houses as needed
    ];

    // Search Form Functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const location = searchForm.location.value.toLowerCase();
            const price = parseInt(searchForm.price.value);
            const amenities = searchForm.amenities.value;

            const filteredHouses = boardingHouses.filter(house => {
                return (
                    (location ? house.location.toLowerCase().includes(location) : true) &&
                    (price ? house.price <= price : true) &&
                    (amenities ? house.amenities.includes(amenities) : true)
                );
            });

            displayBoardingHouses(filteredHouses);
        });
    }

    // Display Boarding Houses
    function displayBoardingHouses(houses) {
        const listingGrid = document.querySelector('.listing-grid');
        if (listingGrid) {
            listingGrid.innerHTML = '';
            houses.forEach(house => {
                const houseElement = document.createElement('div');
                houseElement.classList.add('listing-item');
                houseElement.innerHTML = `
                    <img src="${house.image}" alt="${house.name}">
                    <h3>${house.name}</h3>
                    <p>${house.description}</p>
                    <p>Price: $${house.price}/month</p>
                    <p>Amenities: ${house.amenities.join(', ')}</p>
                `;
                listingGrid.appendChild(houseElement);
            });
        }
    }

    // Sign-Up Form Functionality
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            const role = signupForm.role.value;

            // Mock registration process
            console.log(`User registered with name: ${name}, email: ${email}, role: ${role}`);
            alert('Registration successful!');
            // Redirect to login page or dashboard
            window.location.href = 'login.html';
        });
    }

    // Log-In Form Functionality
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            // Mock authentication process
            console.log(`User logged in with email: ${email}`);
            alert('Login successful!');
            // Redirect to dashboard
            window.location.href = 'landlord-dashboard.html';
        });
    }

    // Landlord Dashboard Functionality
    const addListingButton = document.getElementById('add-listing');
    if (addListingButton) {
        addListingButton.addEventListener('click', () => {
            const newHouse = {
                id: boardingHouses.length + 1,
                location: prompt('Enter location:'),
                price: parseInt(prompt('Enter price:')),
                amenities: prompt('Enter amenities (comma separated):').split(',').map(a => a.trim()),
                name: prompt('Enter name:'),
                description: prompt('Enter description:'),
                image: 'path/to/new-image.jpg' // Placeholder image path
            };

            boardingHouses.push(newHouse);
            console.log('New boarding house added:', newHouse);
            alert('New boarding house added successfully!');
            displayBoardingHouses(boardingHouses);
        });
    }
});