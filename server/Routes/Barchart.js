const corsAnywhere = require('cors-anywhere');
const express = require('express');
const app = express();
const port = 3001;


const host = 'localhost';
const corsPort = 8080;

corsAnywhere.createServer({
originWhitelist: [],
requireHeader: ['origin', 'x-requested-with'],
removeHeaders: ['cookie', 'cookie2']
}).listen(corsPort, host, () => {
console.log(`Running CORS Anywhere on ${host}:${corsPort}`);
});
