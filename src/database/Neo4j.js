const neo4j = require('neo4j-driver');

class Neo4j {

    constructor() {
        this._driver = undefined;
        this._session = undefined;
    }

    getConnection() {
        try {
            this._driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "123456"));
            this._session = this._driver.session();
        } catch (error) {
            throw error;
        }
    }

    async Execute(query) {
        try {

            this.getConnection();

            const result = await this._session.run(query)
            
            if (result && result.records) {
                return result.records.map(result => {
                    return result._fields[0].properties || result._fields[0]
                });
            }
            
        } catch (error) {
           throw error;
        } finally {
            if (this._session) this._session.close();
            if (this._driver) this._driver.close();
        }
    }

}

module.exports = new Neo4j();
