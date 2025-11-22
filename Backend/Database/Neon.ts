import postgres from "postgres";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: Number(PGPORT) || 5432,
  ssl: { rejectUnauthorized: false },
});

async function getPgVersion() {
  try {
    const result = await sql`select version()`;
    console.log(result[0]);
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
  }
}

getPgVersion();
