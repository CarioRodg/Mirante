const customerDao = require('../../dao/customer/CustomerDao');

class CustomerController {

    async create(req, res) {
        try {
            const result = await customerDao.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({
                status: 500,
                msg: error.message || error
            });
        }
    }

    async edit(req, res) {
        try {
            const { id } = req.params;
            const result = await customerDao.edit(req.body, id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({
                status: 500,
                msg: error.Message || error
            });
        }
    }

    async listAll(req, res) {
        try {
            const result = await customerDao.listAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                status: 500,
                msg: error.message || error
            });
        }
    }

    async delete(req, res) {
        
        try {
            const { id } = req.params;
            const result = await customerDao.delete(id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({
                status: 500,
                msg: error.message || error
            });
        }
    }

    async listOne(req, res) {
        try {
            const { id } = req.params;
            const result = await customerDao.listOne(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                status: 500,
                msg: error.message || error
            });
        }
    }
    
async deleteOne(id, callback) {
    global.conn.collection("customers").deleteOne({_id: new ObjectId(id)}, callback);
    }
}

module.exports = new CustomerController();