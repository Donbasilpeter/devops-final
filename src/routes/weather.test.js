const request = require('supertest');
const app = require('../src/app');

describe('Weather API', () => {
    it('should return weather data for a valid city', async () => {
        const response = await request(app).get('/api/weather/London');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('weather');
    });

    it('should return 500 for an invalid city', async () => {
        const response = await request(app).get('/api/weather/InvalidCity');
        expect(response.status).toBe(500);
    });
});
