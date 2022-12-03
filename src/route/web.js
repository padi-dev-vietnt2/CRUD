import express from 'express';

var router = express.Router();

var initWebRoutes = (app) => {
    
    router.get('/', (req, res, next) => {
        return res.send('test 1')
    })

    return app.use('/', router)
}

module.exports = initWebRoutes