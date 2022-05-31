const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {

    res.json({
        message: "router is working"
    });
});


//post route/auth/signup
router.post('/signup', (req, res) => {

    console.log('body', req.body);

    res.json({
        message: "post is working"
    });
});

module.exports = router;