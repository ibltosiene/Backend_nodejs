const express = require('express')
const router = express.Router()
const { getHomepage, getAboutPage, getSamplejs } = require('../controllers/homeController')

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', getHomepage);
// define the about route
router.get('/about', getAboutPage);

router.get('/sample', getSamplejs);
module.exports = router;