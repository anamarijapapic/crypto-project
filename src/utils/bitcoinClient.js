import Client from 'bitcoin-core';

const client = new Client({
  host: process.env.RPC_HOST,
  port: process.env.RPC_PORT,
  username: process.env.RPC_USER,
  password: process.env.RPC_PASS,
});

module.exports = client;
