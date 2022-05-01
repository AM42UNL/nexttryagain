import neo4j from "neo4j-driver";

const uri = 'neo4j+s://b7a98098.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

export default async function handler(req, res) {
    const session = driver.session();
    const response = await session.run('MATCH (w) RETURN LABELS(w), COUNT(w) AS count');

    const records =  response.records.map((record) => {
        return record.toObject();
    })
    res.status(200).json({body: records});
}