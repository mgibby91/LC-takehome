DROP TABLE IF EXISTS customers
CASCADE;
DROP TABLE IF EXISTS quotes
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

-- ************************************************************
-- quotes table
-- ************************************************************
CREATE TABLE quotes
(
  id SERIAL PRIMARY KEY NOT NULL,
  depature_location VARCHAR(255) NOT NULL,
  destination_location VARCHAR(255) NOT NULL,
  departure_date DATE NOT NULL,
  return_date DATE NOT NULL,
  status VARCHAR(255) NOT NULL
);

-- ************************************************************
-- customers_quote table
-- ************************************************************
CREATE TABLE customers_quote
(
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  bookier_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  quote_id INTEGER REFERENCES quotes(id) ON DELETE CASCADE
);