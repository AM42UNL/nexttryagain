import neo4j from "neo4j-driver";


let dataResponse;
const uri = 'neo4j+s://0436e85b.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

export default async function handler(req, res) {
    const session = driver.session();
    //const response = await session.run('MATCH (quote:Quote {complexity:"Low"})-[:fromWork] -> (work:Work) - [typeOf] ->(type:Type) RETURN quote, work, type');
    const response = await session.run('MATCH (quote:Quote) RETURN quote');
    const records =  response.records.map((record) => {
        return record.toObject();
    })
    res.status(200).json({body: records});
}