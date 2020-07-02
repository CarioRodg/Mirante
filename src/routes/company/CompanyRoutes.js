const router = require('express').Router();
const companyController = require('../../controllers/company/CompanyController');

router.post("/company", companyController.CreateCompany);

module.exports = router;