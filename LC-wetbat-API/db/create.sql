DROP TABLE IF EXISTS customers
CASCADE;
DROP TABLE IF EXISTS quotes
CASCADE;
DROP TABLE IF EXISTS customers_quote
CASCADE;
DROP TABLE IF EXISTS transportation
CASCADE;

-- ************************************************************
-- customers table
-- ************************************************************
CREATE TABLE customers
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

-- ************************************************************
-- quotes table
-- ************************************************************
CREATE TABLE quotes
(
  id SERIAL PRIMARY KEY NOT NULL,
  departure_location VARCHAR(255) NOT NULL,
  destination_location VARCHAR(255) NOT NULL,
  departure_date DATE NOT NULL,
  return_date DATE NOT NULL,
  price_cents INTEGER NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT TRUE
);

-- ************************************************************
-- customers_quote table
-- ************************************************************
CREATE TABLE customers_quote
(
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  booker_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  quote_id INTEGER REFERENCES quotes(id) ON DELETE CASCADE
);

-- ************************************************************
-- transportation table
-- ************************************************************
CREATE TABLE transportation
(
  id SERIAL PRIMARY KEY NOT NULL,
  quote_id INTEGER REFERENCES quotes(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);