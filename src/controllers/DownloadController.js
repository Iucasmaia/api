const express = require('express');
const router = express.Router();

// api/v1/download/youtube
router.get('/youtube', async (req, res) => {
    return res.json({
        error: false,
        message: `Hello! First commit.`,
        data: {}
    });
});

module.exports = router;