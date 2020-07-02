const companyDao = require('../../dao/company/CompanyDao');

class CompanyController {
    
    async CreateCompany(req, res) {
        try {
            const result = await companyDao.CreateCompany(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({
                status: 500,
                msg: error.message || error
            });
        }
    }

    
}

module.exports = new CompanyController();