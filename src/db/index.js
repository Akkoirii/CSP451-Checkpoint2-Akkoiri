const databaseConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "csp451db",
};

let isConnected = false;

function connect() {
  isConnected = true;

  console.log(
    `Connected to database ${databaseConfig.database} on ${databaseConfig.host}:${databaseConfig.port}`
  );

  return {
    connected: isConnected,
    config: databaseConfig,
  };
}

function query(sqlQuery) {
  if (!isConnected) {
    throw new Error("Database connection has not been established.");
  }

  return {
    success: true,
    query: sqlQuery,
    rows: [],
  };
}

function getDatabaseStatus() {
  return {
    connected: isConnected,
    config: databaseConfig,
  };
}

module.exports = {
  connect,
  query,
  getDatabaseStatus,
};