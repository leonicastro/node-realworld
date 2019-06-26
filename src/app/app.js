const express = require('express');

class AppController {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(require('./routes/routes.js'));
    }
}

module.exports = new AppController().app;