CREATE DATABASE IF NOT EXISTS indiahomes_db;
USE indiahomes_db;

-- Properties/Main Table)
CREATE TABLE properties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    property_type ENUM('Apartment', 'Villa', 'Plot', 'Commercial') NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    main_image_url VARCHAR(500),
    amenities JSON,
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    bedrooms INT DEFAULT 0,
    bathrooms INT DEFAULT 0,
    area_sqft INT,
    status ENUM('Available', 'Sold', 'Reserved') DEFAULT 'Available',
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_city (city),
    INDEX idx_type (property_type),
    INDEX idx_status (status),
    INDEX idx_featured (featured),
    INDEX idx_price (price),
    FULLTEXT(title, description, location)
);

-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(15),
    role ENUM('admin', 'agent', 'buyer') DEFAULT 'buyer',
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inquiries Table
CREATE TABLE inquiries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    property_id INT,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
email VARCHAR(255) NOT NULL,
    message TEXT,
    status ENUM('new', 'contacted', 'closed') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_property (property_id),
    INDEX idx_status (status)
);

-- Agents Table
CREATE TABLE agents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE,
    license_number VARCHAR(100),
    experience_years INT,
    specialization VARCHAR(255),
    rating DECIMAL(3,2) DEFAULT 0,
    total_sales INT DEFAULT 0,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- -Cities Table
CREATE TABLE cities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(50) DEFAULT 'India',
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    properties_count INT DEFAULT 0
);

-- Master Table
CREATE TABLE amenities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    icon VARCHAR(50),
    category ENUM('basic', 'luxury', 'security', 'sports') DEFAULT 'basic'
);

--  Property
CREATE TABLE property_amenities (
    property_id INT,
    amenity_id INT,
    PRIMARY KEY (property_id, amenity_id),
    
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE,
    FOREIGN KEY (amenity_id) REFERENCES amenities(id) ON DELETE CASCADE
);

-- Price History
CREATE TABLE price_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    property_id INT,
    old_price DECIMAL(15,2),
    new_price DECIMAL(15,2),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

--  Property Views
CREATE TABLE property_views (
    id INT PRIMARY KEY AUTO_INCREMENT,
    property_id INT,
    session_id VARCHAR(255),
    ip_address VARCHAR(45),
    user_agent TEXT,
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

-- Insert Sample Data (
INSERT INTO properties (title, price, location, city, property_type, description, image_url, amenities, bedrooms, bathrooms, area_sqft) VALUES
('Luxury 3BHK Sea View Apartment', 245000000, 'Bandra West, Mumbai', 'Mumbai', 'Apartment', 'Premium 3BHK sea-facing apartment...', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', '["3 Bedrooms", "4 Bathrooms", "Sea View", "Gym", "Pool"]', 3, 4, 2200),
('Spacious 4BHK Villa', 385000000, 'Indiranagar, Bangalore', 'Bangalore', 'Villa', 'Beautiful 4BHK villa in gated community...', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', '["4 Bedrooms", "Private Garden", "Home Theatre"]', 4, 5, 4500),
('Prime Commercial Space', 125000000, 'Connaught Place, Delhi', 'Delhi', 'Commercial', 'High-street retail space in CP...', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', '["Glass Facade", "High Footfall"]', 0, 3, 1500),
('Premium Plot 2400sqft', 185000000, 'Whitefield, Bangalore', 'Bangalore', 'Plot', 'Corner plot 40x60 in premium layout...', 'https://images.unsplash.com/photo-1530549387789-4c1017266635', '["Corner Plot", "Park Facing"]', 0, 0, 2400),
('Ultra Luxury Penthouse', 875000000, 'Worli Sea Face, Mumbai', 'Mumbai', 'Apartment', 'Exclusive 5BHK penthouse with private pool...', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', '["Private Pool", "Home Automation"]', 5, 6, 6500);

-- Insert Sample 
INSERT INTO amenities (name, icon, category) VALUES
('Gym', 'fas fa-dumbbell', 'sports'),
('Swimming Pool', 'fas fa-swimmer', 'luxury'),
('24/7 Security', 'fas fa-shield-alt', 'security'),
('Power Backup', 'fas fa-bolt', 'basic'),
('Modular Kitchen', 'fas fa-utensils', 'basic');

-- Sample Indexes 
CREATE INDEX idx_properties_city_type ON properties(city, property_type);
CREATE INDEX idx_properties_price_status ON properties(price, status);
CREATE FULLTEXT INDEX ft_properties_search ON properties(title, description, location);