var path = require('path');

module.exports = {
    'default': 'mysql',
    'connections' : {
        'mysql': {
            dialect: 'mysql',
            database: 'loopback',
            username: 'root',
            password: '',
            host: '172.0.0.1'
        }
    }
};