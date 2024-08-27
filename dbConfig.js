const { Pool } = require("pg");

const itemsPool = new Pool({
  user: "temperature_sensor_database_user",
  host: "dpg-cr6sse5ds78s73c46nlg-a.oregon-postgres.render.com",
  password: "bbNui9w5PzhiCcxWYW6qc3FVkF75O7hH",
  port: "5432",
  database: "temperature_sensor_database",
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = itemsPool;
