require('dotenv').config(); // Load environment variables
const express = require('express');
const weatherRoutes = require('./routes/weather');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// third commit