const express = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const LikeController = require('./controllers/LikeController');
const DiskikesController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DeveloperController.index);
routes.post('/devs', DeveloperController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DiskikesController.store);

module.exports = routes;
