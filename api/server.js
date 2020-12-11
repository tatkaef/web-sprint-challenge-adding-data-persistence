const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');

const server = express();

const projectRouter = require('./project/project-router');
const resourceRouter = require('./resource/resource-router')
const taskRouter = require('./task/task-router')

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources/', resourceRouter);
server.use('/api/projects', taskRouter)

module.exports = server;
