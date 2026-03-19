
const properties = [
    {
        id: 1,
        title: "Luxury Sky Villa - Infinity Pool View",
        price: "₹2.85 Cr",
        location: "Bandra West, Mumbai",
        type: "Villa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        description: "Live like royalty in this 5BHK sky villa with panoramic sea views and private infinity pool.",
        fullDescription: "Experience luxury living at its finest! This 5BHK sky villa spans 4500 sq.ft with breathtaking Arabian Sea views. Features include private infinity pool, home theatre, gym, 3 car parking, and smart home automation.",
        amenities: [
            "Private Infinity Pool", "5 Bedrooms", "Home Theatre", "Gym", "3 Car Parking",
            "Smart Home", "Sea View", "Modular Kitchen", "Powder Room", "Servant Quarter"
        ]
    },
    {
        id: 2,
        title: "Ultra Modern 4BHK Sea Facing Apartment",
        price: "₹1.95 Cr",
        location: "Worli Sea Face, Mumbai",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        description: "Prime sea-facing 4BHK apartment in Mumbai's most prestigious location.",
        fullDescription: "Stunning 4BHK apartment in Lodha World One - Worli. 3200 sq.ft carpet area with direct sea views from all rooms. Clubhouse, infinity pool, spa, and 24/7 security.",
        amenities: [
            "Sea Facing", "4 Bedrooms", "Modular Kitchen", "2 Bathrooms", "Balcony",
            "Clubhouse Access", "Infinity Pool", "Gym", "24/7 Security", "Power Backup"
        ]
    },
    {
        id: 3,
        title: "Prime Commercial Space - High Street",
        price: "₹4.25 Cr",
        location: "Bandra Linking Road",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop",
        description: "Ready-to-move 1500 sq.ft commercial space on Mumbai's busiest high street.",
        fullDescription: "Perfect for retail/showroom. Ground + 1st floor commercial space with 30ft frontage. Heavy footfall location with excellent visibility and parking.",
        amenities: [
            "1500 sq.ft", "Ground + 1st Floor", "30ft Frontage", "Ample Parking",
            "High Footfall", "Ready to Move", "Power Backup", "Water Storage", "Lift Access"
        ]
    },
    {
        id: 4,
        title: "Spacious 3BHK Garden View Apartment",
        price: "₹1.45 Cr",
        location: "Powai, Mumbai",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
        description: "Beautiful 3BHK apartment with lush garden views in premium Powai complex.",
        fullDescription: "Hiranandani Gardens - 3BHK with 1800 sq.ft carpet area. Lake and garden views, clubhouse, swimming pool, kids play area, and walking track.",
        amenities: [
            "Garden View", "3 Bedrooms", "2.5 Bathrooms", "Modular Kitchen", "Balcony",
            "Clubhouse", "Swimming Pool", "Kids Play Area", "Gym", "Jogging Track"
        ]
    },
    {
        id: 5,
        title: "Premium Plot - Golf Course Road",
        price: "₹3.75 Cr",
        location: "Golf Course Road, Gurgaon",
        type: "Plot",
        image: "https://images.unsplash.com/photo-1716807335226-dfe1e2062db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww&fit=crop",
        description: "300 sq.yds corner plot in DLF Phase 5 - Ready for construction.",
        fullDescription: "Excellent investment opportunity! 300 sq.yds corner plot in most sought-after DLF Phase 5. Clear title, approved for construction, immediate possession.",
        amenities: [
            "300 sq.yds", "Corner Plot", "Clear Title", "Construction Ready",
            "Prime Location", "Wide Road", "All Utilities", "Immediate Possession"
        ]
    },
    {
        id: 6,
        title: "Luxury Penthouse - Juhu Beach",
        price: "₹5.25 Cr",
        location: "Juhu Beach, Mumbai",
        type: "Apartment",
        image: "https://media.istockphoto.com/id/2193129452/photo/luxury-house-with-swimming-pool-and-palm-trees-in-dubai.jpg?s=1024x1024&w=is&k=20&c=G09nc9iDDDgYGTdlTxVPvh3N9Uizj7T_7IFbm_1Wpw8=&fit=crop",
        description: "Exclusive 6BHK beachfront penthouse with private terrace.",
        fullDescription: "Juhu Vile Parle Development Scheme penthouse. 6000 sq.ft with private terrace, jacuzzi, home bar, and direct beach access.",
        amenities: [
            "Beachfront", "6 Bedrooms", "Private Terrace", "Jacuzzi", "Home Bar",
            "Private Lift", "4 Car Parking", "Servant Rooms", "Modular Kitchen"
        ]
    },
    {
        id: 7,
        title: "Independent Bungalow - Alibaug",
        price: "₹2.15 Cr",
        location: "Alibaug Beach Road",
        type: "Villa",
        image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZpbGxhfGVufDB8fDB8fHww&fit=crop",
        description: "3BHK beach bungalow with private garden and beach access.",
        fullDescription: "Your weekend getaway paradise! 3BHK bungalow on 5000 sq.ft plot with private beach access, garden, and coconut grove.",
        amenities: [
            "Beach Access", "Private Garden", "3 Bedrooms", "2 Bathrooms", "Modular Kitchen",
            "Coconut Grove", "5000 sq.ft Plot", "Car Parking", "Water Harvesting"
        ]
    },
    {
        id: 8,
        title: "Office Space - Business District",
        price: "₹2.85 Cr",
        location: "Cyber City, Gurgaon",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        description: "1000 sq.ft furnished office space in Grade-A building.",
        fullDescription: "Fully furnished office space in DLF Cyber City. Ready-to-move with AC, pantry, conference room, and reserved parking.",
        amenities: [
            "1000 sq.ft", "Fully Furnished", "AC", "Conference Room", "Pantry",
            "Reserved Parking", "24/7 Security", "High Speed Internet", "Power Backup"
        ]
    },
    {
        id: 9,
        title: "Lake View 2BHK Apartment",
        price: "₹98 Lac",
        location: "Powai Lake, Mumbai",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        description: "Compact 2BHK with stunning Powai lake views.",
        fullDescription: "Perfect for young professionals! 2BHK apartment with lake views, gym, pool, and excellent connectivity.",
        amenities: [
            "Lake View", "2 Bedrooms", "2 Bathrooms", "Gym", "Swimming Pool",
            "Clubhouse", "24/7 Security", "Power Backup", "Covered Parking"
        ]
    },
    {
        id: 10,
        title: "Builder Floor - Premium Society",
        price: "₹1.75 Cr",
        location: "Sector 49, Gurgaon",
        type: "Villa",
        image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=600&fit=crop",
        description: "3BHK independent floor with private terrace in gated society.",
        fullDescription: "South City 2 - 3BHK builder floor with 2500 sq.ft super area. Private terrace, modular kitchen, and society amenities.",
        amenities: [
            "Independent Floor", "Private Terrace", "3 Bedrooms", "3 Bathrooms",
            "Modular Kitchen", "Gated Society", "Clubhouse", "Sports Facilities", "Power Backup"
        ]
    }
];

// DOm Elements
const propertiesGrid = document.getElementById('propertiesGrid');
const propertyModal = document.getElementById('propertyModal');
const propertyDetail = document.getElementById('propertyDetail');
const closeBtn = document.querySelector('.close');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    renderProperties();
    setupEventListeners();
});

//  Properties Grid
function renderProperties() {
    propertiesGrid.innerHTML = '';
    
    properties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

// Create Property Card
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.onclick = () => openPropertyDetail(property);
    
    card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.title}" loading="lazy">
            <div class="property-badge">${property.type}</div>
        </div>
        <div class="property-content">
            <h3 class="property-title">${property.title}</h3>
            <div class="property-price">${property.price}</div>
            <div class="property-location">
                <i class="fas fa-map-marker-alt"></i>
                ${property.location}
            </div>
            <p class="property-description">${property.description}</p>
            <div class="property-features">
                <div class="feature">
                    <i class="fas fa-bed"></i> ${property.amenities.length > 1 ? property.amenities[1] : 'Premium'}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// when  Property Open Detail 
function openPropertyDetail(property) {
    propertyDetail.innerHTML = `
        <div class="detail-hero">
            <img src="${property.image}" alt="${property.title}">
            <div class="detail-badge">${property.type}</div>
        </div>
        <div class="detail-content">
            <h1 class="detail-title">${property.title}</h1>
            <div class="detail-price">${property.price}</div>
            <div class="detail-location">
                <i class="fas fa-map-marker-alt"></i>
                ${property.location}
            </div>
            
            <div class="detail-description">
                <h3>Property Overview</h3>
                <p>${property.fullDescription}</p>
            </div>
            
            <div class="amenities-grid">
                ${property.amenities.map(amenity => `
                    <div class="amenity">
                        <i class="fas fa-check-circle"></i>
                        <span>${amenity}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="map-placeholder">
                <i class="fas fa-map-marked-alt" style="font-size: 2rem; margin-right: 1rem;"></i>
                Interactive Map Location
            </div>
            
            <div class="inquiry-form">
                <h3>Send Inquiry</h3>
                <form id="inquiryForm">
                    <div class="form-group">
                        <label>Your Name</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="tel" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" required>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i> Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    `;
    
    propertyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Form submission
    document.getElementById('inquiryForm').onsubmit = function(e) {
        e.preventDefault();
        saveInquiryToDatabase(property.id);
    };
}

// Close Modal
closeBtn.onclick = function() {
    propertyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = function(event) {
    if (event.target == propertyModal) {
        propertyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// DATABASE INTEGRATION - Save Inquiries to LocalStorage 
function saveInquiryToDatabase(propertyId) {
    const formData = {
        propertyId: propertyId,
        name: document.querySelector('input[type="text"]').value,
        phone: document.querySelector('input[type="tel"]').value,
        email: document.querySelector('input[type="email"]').value,
        message: document.querySelector('textarea').value,
        timestamp: new Date().toISOString(),
        status: 'New'
    };
    
    // Save to LocalStorage Database
    let inquiries = JSON.parse(localStorage.getItem('propertyInquiries')) || [];
    inquiries.push(formData);
    localStorage.setItem('propertyInquiries', JSON.stringify(inquiries));
    
    // Show Success
    alert(' Inquiry sent successfully! We will contact you within 24 hours.');
    propertyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('inquiryForm').reset();
}

//  Event Listeners
function setupEventListeners() {
    // Navbar Mobile 
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchSelect = document.querySelector('.search-bar select');
    const searchBtn = document.querySelector('.search-bar button');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
}

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const type = searchSelect.value;
    
    const filtered = properties.filter(property => 
        property.location.toLowerCase().includes(query) &&
        (type === 'All' || property.type === type)
    );
    
    propertiesGrid.innerHTML = '';
    filtered.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

// View All Inquiries (Admin Function)
function viewAllInquiries() {
    const inquiries = JSON.parse(localStorage.getItem('propertyInquiries')) || [];
    console.table(inquiries);
    //alert(Total Inquiries: ${inquiries.length}\nCheck Console for details!);
}


window.exportInquiries = function() {
    const inquiries = JSON.parse(localStorage.getItem('propertyInquiries')) || [];
    const dataStr = JSON.stringify(inquiries, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'property-inquiries.json';
    link.click();
};