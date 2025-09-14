import { Client } from "pg";
import 'dotenv/config'
const SQL1 = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 15 ),
  text VARCHAR ( 100 ),
  added TIMESTAMPTZ DEFAULT NOW()
);
`;
const SQL2 = `
INSERT INTO messages (username, text) 
VALUES
  ('Bryan', 'What''s up my man?'),
  ('Odin', 'Doing good brother');
`;
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL1);
  await client.query(SQL2);
  await client.end();
  console.log("done");
}

main();