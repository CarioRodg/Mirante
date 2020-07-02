const Neo4j = require('../../database/Neo4j');
const { v4 } = require('uuid');
const app = require('../../app');
const { Execute } = require('../../database/Neo4j');
const CompanyDao = require('../company/CompanyDao');

class CustomerDao {

    async create(customer) {
        try {
            
            // MATCH (wallstreet:Movie { title: 'Wall Street' })<-[:ACTED_IN]-(actor)
            // RETURN actor.name
           
            return Neo4j.Execute
            (`
                CREATE (n:Customer 
                    { 
                        id: '${v4()}',
                        name: '${customer.name}', 
                        email: '${customer.email}',
                        phone: '${customer.phone}',
                        cpf: '${customer.cpf}'
                    }
                    ) RETURN n.id`);

        } catch (error) {
            throw error;
        }
    }

    async edit (customer, id) {
        // MATCH (p:Person{name:'Keanu Reeves'})
        // WITH p, p {.*} as snapshot
        // SET p.name = 'The One'
        // RETURN snapshot
        try {
            return Neo4j.Execute(`
            MATCH (b:Customer { id: '${id}' })
            SET b = {
                id: '${id}',
                name: '${customer.name}',
                cpf: '${customer.cpf}',
                phone: '${customer.phone}',
                email: '${customer.email}'
            }
            return b`)
            
        } catch (error) {
            
        }
    }

    async listAll() {
        try {
            return Neo4j.Execute(`
                MATCH (c: Customer) RETURN c
            `);
        } catch (error) {
            throw error;
        }
    }

    async listOne(id) {
        try {
            return Neo4j.Execute(`
                MATCH (c: Customer) WHERE c.id = '${id}' RETURN c LIMIT 1
            `);
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            return Neo4j.Execute(`
                MATCH (a: Customer   { id: '${id}'})  DELETE a
            `);

        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerDao();

