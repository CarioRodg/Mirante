const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const customerRoutes = require('./routes/customer/CustomerRoutes');
const companyRoutes = require('./routes/company/CompanyRoutes');

//app.use(express.json());
app.use(customerRoutes)
app.use(companyRoutes)

module.exports = app;