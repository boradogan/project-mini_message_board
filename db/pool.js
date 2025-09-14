import fs from 'fs';
import path from 'path';
import { Pool } from "pg";
import 'dotenv/config'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
    // ca: fs.readFileSync(path.join(__dirname, '..', 'certificates', 'prod-ca-2021.crt')),
    ca:process.env.DATABASE_CA_CERT
  }
});