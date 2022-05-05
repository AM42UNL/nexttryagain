import neo4j from "neo4j-driver";


let dataResponse;
const uri = 'neo4j+s://b7a98098.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;
let quotesDatabase = "Wait for It";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

/*async function handler() {
  const session = driver.session();
  //const response = await session.run('MATCH (quote:Quote {complexity:"Low"})-[:fromWork] -> (work:Work) - [typeOf] ->(type:Type) RETURN quote, work, type');
  const response = await session.run('MATCH (quote:Quote) RETURN quote');
  const records =  response.records.map((record) => {
    quotesDatabase= record.toObject();
  })  */

  function changeWait() {
  document.getElementById("dataDrop").innerHTML="I'm new";
}

  export default function Home() {
    return (
        <div>
          <div> My Next Database App Trial 2
          </div>
          <button onClick={changeWait}> Click Me</button>
          <div id={"dataDrop"}> {quotesDatabase} </div>

        </div>
    )
  }