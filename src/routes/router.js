const router = require("express").Router();

// Users routes

router.use(require("../routes/user"));
router.use(require("../routes/device"));
router.use(require("../routes/userDevice"));
router.use(require("../routes/salesperson"));

module.exports = router;
