class Routes {
    constructor() {
        this.router = require('express').Router();
        this.register();
    }

    register() {
        this.router.get('/', (req, res) => {
            res.send('aasdas d');
        });
    }
}

module.exports = new Routes().router;