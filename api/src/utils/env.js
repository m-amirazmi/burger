const ENVIRONMENT = "dev";

const envLocal = {
  PORT: process.env.PORT,
  DB: process.env.DB,
};

const envDev = {
  PORT: process.env.PORT,
  DB: process.env.DB_DEV,
};

const envProd = {
  PORT: process.env.PORT,
  DB: process.env.DB_PROD,
};

const envs = {
  local: envLocal,
  dev: envDev,
  prod: envProd,
};

export default envs[ENVIRONMENT];
