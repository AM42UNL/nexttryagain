import neo4j from "neo4j-driver";


let dataResponse;
const uri = 'neo4j+s://b7a98098.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;
let quotesDatabase = "Wait for It";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

async function handler(req, res) {
  const session = driver.session();
  //const response = await session.run('MATCH (quote:Quote {complexity:"Low"})-[:fromWork] -> (work:Work) - [typeOf] ->(type:Type) RETURN quote, work, type');
  const response = await session.run('MATCH (quote:Quote) RETURN quote');
  const records = response.records.map((record) => {
    let quotesFromDatabase = record.toObject();
    console.log("Data: ", quotesFromDatabase);
    document.getElementById("dataDrop").innerHTML = quotesFromDatabase.body[0].quote.properties.quote;
  })
}

  function changeWait() {
    handler();

    // document.getElementById("dataDrop").innerHTML="I'm new";
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