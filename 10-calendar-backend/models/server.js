const express = require('express');
const cors = require('cors');
const error = require('../middlewares/errors');

class Server {
    constructor() {
        this.app = express();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());

        this.app.use('/api/auth', require('../routes/auth'));
        this.app.use('/api/events', require('../routes/events'));
        this.app.use(error);
    }

    start() {
        this.middleware();
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }
}

module.exports = Server;
