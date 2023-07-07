const express = require('express');
const axios = require('axios')
const {json} = require("express");
const app = express();
const port = process.env.PORT || 9001;
require('dotenv').config()

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/api/odds', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v4/sports/baseball_mlb/odds',
        params: {
            regions: 'us',
            oddsFormat: 'decimal',
            markets: 'h2h,spreads',
            dateFormat: 'iso'
        },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/scores', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores',
        params: {daysFrom: '1'},
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(9001, () => {
    console.log(`api data is running on port ${port}/api/odds`);
});
