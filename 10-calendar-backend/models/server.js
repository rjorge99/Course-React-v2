const express = require('express');

class Server {
    constructor() {
        this.app = express();
    }

    start() {
        this.app.listen(3000, () => {
            console.log('Server on port 3000');
        });
    }
}

module.exports = Server;
