const express = require('express');
const axios = require('axios');
const router = express.Router();
const API_KEY = process.env.WEATHER_API_KEY;

router.get('/:city', async (req, res) => {
    const { city } = req.params;
    console.log(API_KEY)

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        console.log(response)
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
