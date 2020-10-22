const { pool } = require('./db');

const getAllQuotes = () => {

  return pool.query(`
    SELECT 
      quotes.id AS quotes_id,
      departure_location,
      destination_location,
      departure_date,
      return_date,
      price_cents,
      COUNT (customers_quote.id) AS number_of_travellers,
      name,
      email,
      phone_number
    FROM quotes
    JOIN customers_quote ON quote_id = quotes.id
    JOIN customers ON booker_id = customers.id
    GROUP BY quotes.id, customers.name, customers.email, customers.phone_number;
  `)
    .then(res => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows;
    })
    .catch(err => {
      console.error(err);
    });
}

const getAllTransportation = () => {
  return pool.query(`
    SELECT * FROM transportation;
  `)
    .then(res => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows;
    })
    .catch(err => {
      console.error(err);
    });
}

const deleteQuoteByID = (quoteID) => {
  return pool.query(`
    DELETE FROM quotes
    WHERE quotes.id = $1
    RETURNING *;
  `, [quoteID])
    .then(res => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows;
    })
    .catch(err => {
      console.error(err);
    });

}


module.exports = {
  getAllQuotes,
  getAllTransportation,
  deleteQuoteByID,
};