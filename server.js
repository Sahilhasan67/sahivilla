const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/propertypulse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB Connected'))
.catch(err => console.log(' MongoDB Error:', err));

// Property Schema
const propertySchema = new mongoose.Schema({
    title: String,
    price: String,
    location: String,
    type: String,
    image: String,
    description: String,
    fullDescription: String,
    amenities: [String]
});

const Property = mongoose.model('Property', propertySchema);

// Routes
app.get('/api/properties', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/inquiry')