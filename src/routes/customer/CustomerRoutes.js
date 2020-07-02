const router = require('express').Router();
const customerController = require('../../controllers/customer/CustomerController');

router.post("/customer", customerController.create);
router.get("/customer", customerController.listAll);
router.get("/customer/:id", customerController.listOne);
router.delete("/customer/:id", customerController.delete);
router.put("/customer/:id", customerController.edit);

module.exports = router;