const Neo4j = require('../../database/Neo4j');
const  { v4 } = require('uuid');

class CompanyDao {
    async  CreateCompany(create) {
        try {
            return Neo4j.Execute(`
            CREATE (n:Company
            {
                idCompany: '${v4()}',
                nameCompany: '${create.nameCompany}',
                emailCompany: '${create.emailCompany}',
                cnpj: '${create.cnpj}',
                senha: '${create.senha}'
            }
            ) RETURN n.idCompany`);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CompanyDao();

