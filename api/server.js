const express = require('express');
const helmet = require('helmet');

// const db = require('../data/dbConfig.js');

const server = express();

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter)

module.exports = server;
