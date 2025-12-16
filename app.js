require('dotenv').config({ path: './.env' });

const { Pool } = require('pg');

console.log('ENV:', {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
});

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
});

async function testarConexao() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conectado com sucesso!', res.rows[0]);
  } catch (err) {
    console.error('Erro ao conectar:', err);
  }
}

testarConexao();
