DROP TABLE IF EXISTS customers
CASCADE;

-- ************************************************************
-- customers table
-- ************************************************************
CREATE TABLE customers
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number INTEGER NOT NULL
);